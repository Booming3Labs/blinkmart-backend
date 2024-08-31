'use strict';

/**
 * sku service
 */

const { createCoreService } = require('@strapi/strapi').factories;
const common = require('../../../common');
module.exports = createCoreService('api::sku.sku'
    ,({strapi}) =>({

    // 创建商品
    create: async (ctx) => {
        let skuInfo = ctx.request.body.data;
        // 校验参数
        strapi.service('api::sku.sku').checkParam(skuInfo);
        await strapi.db.query('api::sku.sku').create({
            data: skuInfo
        })
        return skuInfo;
    },
    // 更新商品
    update: async (ctx) => {
        let skuInfo = ctx.request.body.data;
        // 截取请求中的商品id
        let skuId = ctx.request.path.split('/').pop();
        if (!skuId) {
            throw new Error("id不能为空");
        }
        let originSku = await strapi.db.query('api::sku.sku').findOne({
            where: {
                id: skuId
            }
        });
        if (!originSku) {
            throw new Error("商品不存在");
        }
        // 执行更新
        await strapi.db.query('api::sku.sku').update({
            where: {
                id: skuId
            },
            data: skuInfo
        })
        return skuInfo;
    },
    checkParam: (skuInfo) => {
        console.log(skuInfo);
        
        if (!skuInfo.seller_addr){
            throw new Error("钱包地址不能为空");
        }
        if (!skuInfo.name) {
            throw new Error("商品名称不能为空");
        }
        if (!skuInfo.price) {
            throw new Error("商品价格不能为空");
        }
        if (!skuInfo.spu) {
            throw new Error("商品库存不能为空");
        }
        if (skuInfo.shelf_status == null) {
            throw new Error("商品上/下架状态不能为空");
        }
    
    },
})
);
