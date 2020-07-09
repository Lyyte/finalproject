const router = require("express").Router();
const storeController = require("../../controllers/storeController");

// Matches with "/api/store"
router.route("/")
  .get(storeController.findAll)
  .post(storeController.create);

// Matches with "/api/store/:products"
router
  .route("/:products")
  .get(storeController.list)
  .put(storeController.update)
  .delete(storeController.remove);

router
  .route('/products/categories')
  .get(storeController.listCategories)

router
  .get("/braintree/getToken/:userId", storeController.generateToken)
  .post("/braintree/payment/:userId", storeController.processPayment)

router
  .post("/order/create/:userId", storeController.createorder)


module.exports = router;