import express from 'express';
import routeController from './routes';

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
routeController(app);

app.listen(PORT, () => {
  console.log(`Server started and is listening on port ${PORT}`);
});
export default app;
