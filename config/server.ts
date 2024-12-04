export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: { watchIgnoreFiles : [ '**/info.log', '**/error.log' ]},
  });
