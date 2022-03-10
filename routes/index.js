var express = require('express');
var router = express.Router();
const controllers = require("../controllers")
const upload = require('../multer_config');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Bu Bootcamp API' });
});

router.post("/category/create", upload.single('file'), controllers.createCategory);
router.get("/category/list", controllers.getAllCategories);
router.get("/category/:id", controllers.getCategoryById);
router.put("/category/:id", controllers.updateCategory);
router.delete("/category/:id", controllers.deleteCategory);

module.exports = router;
