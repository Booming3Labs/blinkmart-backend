'use strict';

/**
 * bm-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bm-order.bm-order',
    ({strapi}) => ({

    // 创建订单    
    create: async (ctx) => {
        // 1、校验参数
        let orderInfo  = ctx.request.body.data;
        console.log("创建订单入参：",orderInfo);
        strapi.service('api::bm-order.bm-order').checkParams(orderInfo);
        // 2、查询商品库存
        let sku_id =  orderInfo.sku_id;
        const skuInfo =  await strapi.db.query('api::sku.sku').findOne({
            where: {
                id: sku_id
            }
        })
        if(!skuInfo){
            throw new Error("商品信息不存在");
        }
        if(skuInfo.spu < orderInfo.sku_amounts){
            throw new Error("商品库存不足");
        }
        try {
            // 3、扣减商品库存，增加销量
            let skuUpdateInfo = skuInfo;
            skuUpdateInfo.spu -= orderInfo.sku_amounts;
            skuUpdateInfo.sales_amount += orderInfo.sku_amounts;
            await strapi.db.query('api::sku.sku').update({
                where: {
                    id: sku_id
                },
                data: skuUpdateInfo
            })
            // 4、订单生成
            await strapi.db.query('api::bm-order.bm-order').create({
                data: orderInfo
            })
            return orderInfo;
        } catch (error) {
            console.log("创建订单失败：",error);
            // 回退库存
            strapi.db.query('api::sku.sku').update({
                where: {
                    id: sku_id
                },
                data: skuInfo
            })
            throw new Error("创建订单失败:"+error.message);
            
        }
    },

    update: async (ctx) => {
        let orderInfo = ctx.request.body.data;
        // 截取请求中的商品id
        let orderId = ctx.request.path.split('/').pop();
        if (!orderId) {
            throw new Error("id不能为空");
        }
        let originOrder = await strapi.db.query('api::sku.sku').findOne({
            where: {
                id: orderId
            }
        });
        if (!originOrder) {
            throw new Error("订单不存在");
        }
        // 执行更新
        await strapi.db.query('api::bm-order.bm-order').update({
            where: {
                id: orderId
            },
            data: orderInfo
        })
        return orderInfo;
    },

    checkParams: (orderInfo) => {
        if (!orderInfo.seller_addr) {
            throw new Error("卖家钱包地址不能为空");
        }
        if (!orderInfo.buyer_addr) {
            throw new Error("买家钱包地址不能为空");
        }
        if (!orderInfo.order_price) {
            throw new Error("订单价格不能为空");
        }
        if (!orderInfo.sku_amounts) {
            throw new Error("商品数量不能为空");
        }
        if (!orderInfo.deliever_addr) {
            throw new Error("发货地址不能为空");
        }
        if (orderInfo.deliever_status == null) {
            throw new Error("发货状态不能为空");
        }
        if (!orderInfo.sku_id) {
            throw new Error("商品id不能为空");
        }
    },

}));
