const router = require("express").Router();
const handle = require("../handlers");
const auth = require("../middlewares/auth");

router
  .route("/")
  .get(handle.showOrders)
  .post(auth, handle.createOrder);

router.get("/user", auth, handle.userOrders);

router
  .route("/:id")
  .get(handle.getOrder)
  .post() //auth, handle.vote
  .delete(auth, handle.deleteOrder); //auth, handle.deletePoll

module.exports = router;
