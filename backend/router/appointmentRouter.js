import express from "express";
import { deleteAppointment, getAllAppointments, postAppointment, updateAppointmentStatue } from "../controller/appointmentController.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
// router.post("/post", postAppointment);
router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/get", isAdminAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatue);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);

export default router; 