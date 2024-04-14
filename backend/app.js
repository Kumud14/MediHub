import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./src/utilis/ApiError.js"

const app = express();

// cors middleware configuration connects frontend to backend
app.use(
    cors({
        origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
        method: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// import routes
import userRouter from "./src/routes/user.routes.js";
import contactUsRouter from "./src/routes/contactus.routes.js";




// routes declaration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/message", contactUsRouter);



// error middleware 
app.use(errorHandler);
export default app;
