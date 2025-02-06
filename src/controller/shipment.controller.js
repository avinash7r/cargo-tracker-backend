import Shipment from "../model/shipment.model.js";

export const getAllShipments=async(req,res)=>{
    try {
        const shipments=await Shipment.find();
        res.status(200).json(shipments);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getShipmentById=async(req,res)=>{
    try {
        const shipment=await Shipment.findById(req.params.id);
        if (!shipment) {
            return res.status(404).json({ message: 'Shipment not found' });
        }
        res.status(200).json(shipment);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getShipmenteta=async(req,res)=>{
    try {
        const shipment=await Shipment.findById(req.params.id);
        if (!shipment) {
            return res.status(404).json({ message: 'Shipment not found' });
        }
        res.status(200).json(shipment.eta);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateCurrentLocation=async(req,res)=>{
    try {
        const shipment=await Shipment.findById(req.params.id);
        if (!shipment) {
            return res.status(404).json({ message: 'Shipment not found' });
        }
        const routeLocation = shipment.route.find((stop) => stop.name === req.body.name);

        if (!routeLocation) {
          return res.status(400).json({ message: 'Invalid location. Not part of the predefined route.' });
        }
        shipment.currentLocation = {
          name: routeLocation.name,
          coordinates: routeLocation.coordinates,
        };
    
        await shipment.save();
        res.status(200).json({message:"Location updated",shipment});
    } catch (error) {
        res.status(500).json(error);
    }
}

export const createNewShipment=async(req,res)=>{
    try {
        const newShipment=new Shipment(req.body);
        const createdShipment=await newShipment.save();
        res.status(201).json(createdShipment);
    } catch (error) {
        res.status(500).json(error);
    }
}