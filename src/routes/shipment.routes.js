import express from "express";
import { getAllShipments,getShipmentById,getShipmenteta,updateCurrentLocation,createNewShipment } from "../controller/shipment.controller.js";
const router = express.Router();

router.get("/shipments",getAllShipments);
router.get("/shipment/:id",getShipmentById);
router.get("/shipment/:id/eta",getShipmenteta);
router.post("/shipment/:id/update-location",updateCurrentLocation);
router.post("/shipment",createNewShipment);


export default router;