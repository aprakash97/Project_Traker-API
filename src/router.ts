import { Router } from "express";

const router = Router(); //Router function

//Product routes
router.get("/product", (req, res) => {
  console.log(req.shhhh_secret);
  // res.status(200);
  res.json({ message: req.shhhh_secret });
});
router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.post("/product", () => {});
router.delete("/product/:id", () => {});

//Update routes
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update", () => {});
router.delete("/update/:id", () => {});

//UpdatePoint routes
router.get("/updatepoint", () => {});
router.get("/updatepoint/:id", () => {});
router.put("/updatepoint/:id", () => {});
router.post("/updatepoint", () => {});
router.delete("/updatepoint/:id", () => {});

export default router;
