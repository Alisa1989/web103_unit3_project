import express from "express";

import LocationsController from '../controllers/locations.js'

const router = express.Router();

// Get all locations
router.get("/", LocationsController.getLocations);

// Get a specific location
router.get("/:locationId", LocationsController.getLocationById);

export default router;