module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  // 'strapi::cors',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true, // deprecated in v4.25.8
      headers: '*',
      origin: ['*']
    }
  },
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
