const express = require("express");
const router = express.Router();

const EventController = require("../../controllers/Event");

router.post("/event", EventController.saveEvent);
router.get("/events", EventController.getEvents);
router.delete("/deleteevent/:id", EventController.deleteEvent);
router.get("/getevent/:id", EventController.getEvent);
router.post("/updateevent/:id", EventController.updateEvent);
router.post("/get_event_by_category/:category", EventController.getEventByCategory);

module.exports = router;
