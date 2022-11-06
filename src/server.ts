import * as dotenv from 'dotenv'
import express, { Response } from 'express';

dotenv.config()

const app = express();

app.get('/', (__, res: Response) => {
  res.send('200');
})

app.listen(process.env.PORT, () => {
  console.log(`server is started ${process.env.PORT}`);
})