import express from 'express';
import { patientRegister } from '../controllers/patient/user.controller.js';
import { login } from '../controllers/patient/user.controller.js';

const router = express.Router();

router.post("/patient/register", patientRegister)
router.post("/login", login)



export default router;