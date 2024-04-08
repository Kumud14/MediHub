import asyncHandler from "../../utilis/asyncHandler.js";
import { ApiError } from "../../utilis/ApiError.js";
import { User } from "../../models/user.model.js";
import { generateToken } from "../../utilis/jwtToken.js";
import { ApiResponse } from "../../utilis/ApiResponse.js";


//! Adding a new doctor by admin only
export const addNewDoctor = asyncHandler(async (req, res, next) => {
    // taking the info from the admin
    const { firstName, lastName, email, phone, dob, gender, password } = req.body;

    // checking the info provided by the admin
    if (!firstName || !lastName || !email || !phone || !dob || !gender || !password) {
        throw new ApiError(400, "Please Fill Full Form!");
    }

    // check if the admin already exists
    let existedDoctor = await User.findOne({ email });
    if (existedDoctor) {
        throw new ApiError(400, `${existedDoctor.role} with this Email already Registered`);
    }

    // finally create the user
    const createdDoctor = await User.create({
        firstName,
        lastName,
        email,
        phone,
        dob,
        gender,
        password,
        role: "Doctor",
    });
    generateToken(createdDoctor, "Dcotor Added Successfully!", 200, res);
});


//! Getting all doctors by user
export const getAllDoctors = asyncHandler(async (req, res, next) => {
    const doctors = await User.find({ role: "Doctor" });

    res
        .status(200)
        .json(new ApiResponse(200, doctors, " DOCTORS LIST"));
});

