'use strict';

/**
 * sku controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const common = require('../../../common');

module.exports = createCoreController('api::sku.sku',
    ({strapi}) => ({
        // 创建商品
        async create(ctx){
            try {
                let res = await strapi.service('api::sku.sku').create(ctx);
                return common.success(res);
            } catch (error) {
                return common.error(error.message);
            }
        },
        // 修改商品
        async update(ctx){
            try {
                let res = await strapi.service('api::sku.sku').update(ctx);
                return common.success(res);
            } catch (error) {
                return common.error(error.message);
            }
        },
        // 商品分页
        async find(ctx){
            try {
                let res = await super.find(ctx);
                return common.successWithMeta(res.data,res.meta);
            } catch (error) {
                return common.error(error.message);
            }
        },
    })
);
