import asyncHandler from "../utilis/asyncHandler.js";
import { ApiError } from "../utilis/ApiError.js"
import jwt from "jsonwebtoken";

// Middleware to verify JWT token for patient role
export const isPatientAuthenticated = asyncHandler(async (req, res, next) => {
    // Get token from request cookies
    const token = req.cookies.patientToken;

    // Verify token
    if (!token) {
        throw new ApiError(401, "Unauthorized - No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded.role !== "Patient") {
        throw new ApiError(403, `${decoded.role} is not authorized for this resources`);
    }
    req.user = decoded;
    next();
});

// Middleware to verify JWT token for admin role
export const isAdminAuthenticated = asyncHandler(async (req, res, next) => {
    // Get token from request cookies
    const token = req.cookies.adminToken;

    // Verify token
    if (!token) {
        throw new ApiError(401, "Unauthorized - No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded.role !== "Admin") {
        throw new ApiError(403, `${decoded.role} is not authorized for this resources`);
    }
    req.user = decoded;
    next();
});

// Middleware to verify JWT token for doctor role
export const isdoctorAuthenticated = asyncHandler(async (req, res, next) => {
    // Get token from request cookies
    const token = req.cookies.doctorToken;

    // Verify token
    if (!token) {
        throw new ApiError(401, "Unauthorized - No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (decoded.role !== "Doctor") {
        throw new ApiError(403, `${decoded.role} is not authorized for this resources`);
    }
    req.user = decoded;
    next();
});
