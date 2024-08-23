'use strict';

/**
 * blink controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blink.blink');
