import { express } from 'express';
import loadENV from './utils/load_env';
import injectRoutes from './routes';
import injectMiddlewares from './middleware/mid';

const startServer = (api) => {
  loadENV();
  const port = process.env.PORT || 5000;
  const env = process.env.npm_lifecycle_event || 'dev';
  api.listen(port, () => {
    console.log(`[${env}] API has started listening at port:${port}`);
  });
};
const server = express();

injectMiddlewares(server);
injectRoutes(server);
startServer(server);

export default server;
