import express from 'express';

import dotenv from 'dotenv';

const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hey, Express!');
});

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
});