import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

// Application routes
import userRoutes from "./app/modules/user/route";

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoutes);

export default app;



/* 

Step : 1 
First Interface==
step: 2 
Sheckema==
Step: 3
Model==
Step: 4
Database Qurey==

route == "/"
route function === controller
api
database query === service
*/ 


/*

app.ts === user.routes === user.controllers === user.services

user.model === schema and model

user.interface === interface

server.ts == database conntection
*/