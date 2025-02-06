import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema({
  containerId: { type: String, required: true, unique: true },
  route: [
    {
      name: String,
      coordinates: { lat: Number, lng: Number },
    },
  ],
  currentLocation: {
    name: String,
    coordinates: { lat: Number, lng: Number },
  },
  eta: Date,
  status: {
    type: String,
    enum: ["Pending", "In Transit", "Delayed", "Delivered"],
    default: "Pending",
  },
});

const Shipment=mongoose.model("Shipment",shipmentSchema);

export default Shipment;

// Fields for shipment ID, container ID, route (array of locations), current location, current ETA, status, etc