module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'furkanuzun'),
      user: env('DATABASE_USERNAME', 'furkanuzun'),
      password: env('DATABASE_PASSWORD', 'database8563D'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
