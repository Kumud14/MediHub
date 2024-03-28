import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";




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



export default app;
