'use strict';

/**
 * bm-order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const common = require('../../../common');
const skuService =  require('../../sku/services/sku');

module.exports = createCoreController('api::bm-order.bm-order',
    ({strapi}) => ({
    async create(ctx) {
        try {
            let res = await strapi.service('api::bm-order.bm-order').create(ctx);
            return common.success(res);
        } catch (error) {
            return common.error(error.message);
        }
    },

    // 订单
    async update(ctx){
        try {
            let res = await strapi.service('api::bm-order.bm-order').update(ctx);
            return common.success(res);
        } catch (error) {
            return common.error(error.message);
        }
    },

    // 订单分页
    async find(ctx){
        try {
            const {meta,data} = await super.find(ctx);
            return common.successWithMeta(data,meta);
        } catch (error) {
            return common.error(error.message);
        }
    },
}));
