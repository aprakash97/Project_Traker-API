import { Router } from "express";
import { body, oneOf, validationResult } from "express-validator";
import {
  createProduct,
  deleteProduct,
  getOneProduct,
  getProducts,
  updateProduct,
} from "./handlers/product";
import {
  createUpdate,
  deleteUpdates,
  getOneUpdate,
  getUpdates,
  updateUpdate,
} from "./handlers/update";
import { handleInputErrors } from "./modules/middlewares";

const router = Router(); //Router function

//input validator-express validator

//Product routes

// router.get("/product", (req, res) => {
//   console.log(req.shhhh_secret);
//   // res.status(200);
//   res.json({ message: req.shhhh_secret });
// });

router.get("/product", getProducts); //working
router.get("/product/:id", getOneProduct); //working
router.put(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  updateProduct
); //working
router.post(
  "/product",
  body("name").isString(),
  handleInputErrors,
  createProduct
); //working
router.delete("/product/:id", deleteProduct); //working

//Update routes
router.get("/update", getUpdates); //working
router.get("/update/:id", getOneUpdate); //working
router.put(
  "/update/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(),
  body("version").optional(),
  updateUpdate
); //working
router.post(
  "/update",
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("productId").exists().isString(),
  createUpdate
); //working
router.delete("/update/:id", deleteUpdates); //working

//UpdatePoint routes
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put(
  "/updatepoint/:id",
  body("name").optional().isString(),
  body("description").optional().isString(),
  () => {}
);
router.post(
  "/updatepoint",
  body("name").isString(),
  body("description").isString(),
  body("updateId").exists().isString(),
  () => {}
);
router.delete("/updatepoint/:id", () => {});

router.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: "in router handler" });
});

export default router;
