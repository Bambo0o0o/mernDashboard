/* Import tools */
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

/* Import routes */
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

/* Import User data to MongoDB */
import User from "./models/User.js";
/* Import Product and ProductStat data tp MongoDB */
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
// import Transaction from "./models/Transaction.js";
// import OverallStat from "./models/OverallStat.js";
// import AffiliateStat from "./models/AffiliateStat.js";
import {
  // Adding dataUser
  dataUser,
  // Adding dataProduct and dataProductStat
  dataProduct,
  dataProductStat,
  
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";

/* Configuration Tools*/
dotenv.config({ quiet: true });
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Configuration Routes */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* Mongoose Setup */
const PORT = process.env.PORT || 9000;                  //process.env. allow us to acces .env file
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME ---> Close it after used onetime by "ctrl + /"*/
    // User.insertMany(dataUser);                       //Add 01
    // Product.insertMany(dataProduct);                 //Add 02
    // ProductStat.insertMany(dataProductStat);         //Add 03
    // Transaction.insertMany(dataTransaction);         //Add 04

    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    
    

  })
  .catch((error) => console.log(`${error} did not connect`));