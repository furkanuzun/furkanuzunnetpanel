module.exports = ({ env }) => ({
  url: env("https://panel.furkanuzun.net"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
