import asyncHandler from "../../utilis/asyncHandler.js";
import { ApiError } from "../../utilis/ApiError.js";
import { ApiResponse } from "../../utilis/ApiResponse.js"
import { User } from "../../models/patient/user.model.js"
import { generateToken } from "../../utilis/jwtToken.js"


//! Register the user
export const patientRegister = asyncHandler(async (req, res, next) => {
    // taking the info from the user
    const { firstName, lastName, email, phone, nic, dob, gender, password, role } = req.body;

    // checking the info provided by the user
    if (!firstName || !lastName || !email || !phone || !nic || !dob || !gender || !password || !role) {
        next(ApiError(400, "Please Fill Full Form!"));
    }

    // check if the user already exists
    let existedUser = await User.findOne({ email });
    if (existedUser) {
        throw new ApiError(400, "User Already Registered!");
    }

    // finally create the user
    const createdUser = await User.create({
        firstName,
        lastName,
        email,
        phone,
        nic,
        dob,
        gender,
        password,
        role: "Patient",
    });
    generateToken(createdUser, "User Registrated Successfully!", 200, res);
    // return res.status(201).json(
    //     new ApiResponse(200, createdUser, "User registered Successfully")
    // )
});

//! Login the user
export const login = asyncHandler(async (req, res, next) => {
    // taking the info from the user
    const { email, password, confirmPassword, role } = req.body;

    // checking the info provided by the user
    if (!email || !password || !confirmPassword || !role) {
        return next(new ErrorHandler("Please Fill Full Form!", 400));
    }
    // check if password and confirm password matches
    if (password !== confirmPassword) {
        return next(new ApiError(400, "Password and Confirm Password do not match!"));
    }

    // ! checking the user provide correct details for login
    // find the user in database via email
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ApiError(400, "Invalid Email or Password"));
    }
    // checking the given password and password in database matches or not
    const isPasswordMatched = await user.comparePassword(password)
    if (!isPasswordMatched) {
        return next(new ApiError(400, "Invalid Email or Password"));
    }

    if (role !== user.role) {
        return next(new ApiError(400, "User with this role not found"));
    }
    generateToken(user, "User Logged In Successfully", 200, res)
});
