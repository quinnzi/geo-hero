import express from 'express';
import {promises as fs} from 'fs';
import sfs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.set('view engine', 'ejs');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res)=>{
	res.sendFile(__dirname + '/page.html')
})
app.listen(3001, (err, next)=>{
    if(err){console.log(err)}
    console.log('She might be listening...')
}
)
