import express from "express";
import cors from "cors";
import UserRoute from "./routes/user.route";
import AuthRoute from "./routes/auth.route";
import CategoeyRoute from "./routes/category.route";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", UserRoute);
app.use("/api", AuthRoute);
app.use("/api", CategoeyRoute);


export default app;