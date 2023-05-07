import intializeServer from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app = intializeServer();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
