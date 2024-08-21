
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from 'swagger-jsdoc';
// packages imports
import express from "express";
import 'express-async-errors';
import dotenv from 'dotenv';
import colors from 'colors';
import cors from 'cors';

import morgan from "morgan";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
// files import
import connectDB from "./config/db.js";

import jobRoutes from "./routes/jobsRoutes.js"
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middelwares/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
// import Userdb from './models/model.js';

//Dot ENV config
dotenv.config();

// mongodb connection
connectDB();

// Swagger
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Job Portal Application",
        description: "Node Expressjs Job Portal Application",
      },
      servers: [
        {
         url: "http://localhost:8000",
           
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const spec = swaggerDoc(options);
  


const app = express();
// middelwares 
app.use(helmet());
app.use(xss())
app.use(mongoSanitize())
app.use(express.json());
app.use(cors())
app.use(morgan("dev"));
//routes
app.use('/api/v1/test',testRoutes);
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/job',jobRoutes);
app.use("/api-doc",swaggerUi.serve,swaggerUi.setup(spec))



// validation middleware
app.use(errorMiddleware);

// Port
const PORT = process.env.PORT || 8000;



app.listen(PORT,()=>{
    console.log(`Node server Running in ${process.env.DEV_MODE} on ${PORT}`.bgCyan.white);
    
})