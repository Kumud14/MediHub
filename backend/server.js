import dotenv from "dotenv";
import app from "./app.js";
import dbConnection from "./src/db/dbConnection.js";

// dotenv configuration
dotenv.config({
    path: './.env'
})

// Database connnection configuration
dbConnection()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })
