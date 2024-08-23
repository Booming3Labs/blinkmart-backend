'use strict';

/**
 * blink service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blink.blink');
