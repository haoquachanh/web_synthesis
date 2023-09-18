import 'reflect-metadata'
import express from 'express';
import router from './routes';
import { dataSource } from './datasource';
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', router)

app.get('/', (req, res) => {
  res.send('Server is running !');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
