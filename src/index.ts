import cors from 'cors';
import express from 'express';
import * as dotenv from "dotenv";
import helmet from "helmet";
import * as task from './controller/task.controller';

dotenv.config();

if (!process.env.PORT) {
  console.log(`Error to get ports`);
  process.exit(1);
}


const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const authorisedRoute = express.Router();
app.use("/task", authorisedRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});




app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Credentials', "true");
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');

  next();
});


// Send message for default URL
authorisedRoute.get('/', (req, res) => res.send('Welcome to default response of Stock API'));
authorisedRoute.get('/stocks', task.getAllStocks);
authorisedRoute.get('/transactions', task.getAllTransactions);
authorisedRoute.get('/sku', task.getProductBySKU);
