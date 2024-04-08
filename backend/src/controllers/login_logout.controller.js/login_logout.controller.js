import asyncHandler from "../../utilis/asyncHandler.js";
import { ApiError } from "../../utilis/ApiError.js";
import { User } from "../../models/user.model.js";
import { generateToken } from "../../utilis/jwtToken.js";


//! Login the user
export const login = asyncHandler(async (req, res, next) => {
    // taking the info from the user
    const { email, password, confirmPassword, role } = req.body;

    // checking the info provided by the user
    if (!email || !password || !confirmPassword || !role) {
        throw new ApiError("Please Fill Full Form!", 400);
    }
    // check if password and confirm password matches
    if (password !== confirmPassword) {
        throw new ApiError(400, "Password and Confirm Password do not match!");
    }

    // ! checking the user provide correct details for login
    // find the user in database via email
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        throw new ApiError(400, "Invalid Email or Password");
    }
    // checking the given password and password in database matches or not
    const isPasswordMatched = await user.comparePassword(password)
    if (!isPasswordMatched) {
        throw new ApiError(400, "Invalid Email or Password");
    }

    if (role !== user.role) {
        throw new ApiError(400, "User with this role not found");
    }
    generateToken(user, "User Logged In Successfully", 200, res)
})


//! Logout Admin
export const logoutAdmin = asyncHandler(async (req, res, next) => {
    res
        .status(200)
        .cookie("adminToken", "", {
            expires: new Date(Date.now()),
            httpOnly: true
        })
        .json({
            success: true,
            message: "Admin logged out Successfully"
        });
})


//! Logout Patient
export const logoutPatient = asyncHandler(async (req, res, next) => {
    res
        .status(200)
        .cookie("patientToken", "", {
            expires: new Date(Date.now()),
            httpOnly: true
        })
        .json({
            success: true,
            message: "User logged out Successfully"
        });
})


//! Logout Doctor
export const logoutDoctor = asyncHandler(async (req, res, next) => {
    res
        .status(200)
        .cookie("doctorToken", "", {
            expires: new Date(Date.now()),
            httpOnly: true
        })
        .json({
            success: true,
            message: "User logged out Successfully"
        });
})