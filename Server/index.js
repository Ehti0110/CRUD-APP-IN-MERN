import express from "express";
import connection from "./Database/database.js";
import dotenv from "dotenv"
import routes from "./Routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

dotenv.config();

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

connection(username, password);

app.listen(PORT, ()=> console.log(`Express Server is created and running successfully on port 8000 :)`))

app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));

app.use(cors())

app.use("/", routes)



