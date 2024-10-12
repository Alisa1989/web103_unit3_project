import express from "express";

import EventsController from '../controllers/events.js'

const router = express.Router();

// Get all events
router.get("/", EventsController.getEvents);

// Get a specific event
router.get("/:eventId", EventsController.getEventById);

export default router;