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

module.exports = router;