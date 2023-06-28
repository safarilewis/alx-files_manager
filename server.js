import { Express } from 'express';
import loadENV from './utils/load_env';
import

const startServer = (api) => {
  loadENV();
  const port = process.env.PORT || 5000;
  const env = process.env.npm_lifecycle_event || 'dev';
  api.listen(port, () => {
    console.log(`[${env}] API has started listening at port:${port}`);
  });
};

