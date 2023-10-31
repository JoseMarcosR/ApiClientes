
import { router} from "./routers/routers.js";
import express from 'express';
import { sequelize } from "./data/configdb.js";

const app = express();

app.use(express.json());

app.use('/api', router);
export const port = 3000;

app.listen(port, async()=>{
    console.log('Api Rest en puerto ', port)
})
