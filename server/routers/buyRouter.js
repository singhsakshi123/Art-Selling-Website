const express = require("express");
const router = express.Router();
const Controller = require("../controllers/buyController");
const authentication = require("../middleware/Authentication");

router.post("/addtocart", authentication, Controller.addToCart);

router.get("/mycart/:id", authentication, Controller.getMyCart);

router.delete("/deleteItem", authentication, Controller.deleteItem);

router.post("/buyCart", authentication, Controller.buyCart);

router.post("/updateCart", authentication, Controller.updateCart);

router.get(
    "/getTrack",
    authentication,
    Controller.getTrack
)

router.post(
    "/isAccepted",
    authentication,
    Controller.isAccepted
)

router.get(
    "/getDeliveredTrack",
    authentication,
    Controller.getDeliveredTrack,
)

router.post(
    "/isDelivered",
    authentication,
    Controller.isDelivered
)

router.post(
    "/isNotDelivered",
    authentication,
    Controller.isNotDelivered
)

module.exports = router;
