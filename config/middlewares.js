module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  // 'strapi::cors',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: false,
      header: '*',
      origin: ['http://localhost:1337']
    }
  },
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
