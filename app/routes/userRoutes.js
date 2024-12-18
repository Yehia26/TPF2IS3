import express from "express";
import{
    controllers1, 
    controllers2, 
    controllers3,
    controllers4,
    controllers5,
    controllers6

} from ".../controllers/";

const app = express();

app.get("/api/users/:id", controllers1);
app.get("/api/users/:id", controllers2);
app.get("/api/users/:id", controllers3);
app.get("/api/users/:id", controllers4);
app.get("/api/users/:id", controllers5);
app.get("/api/users/:id", controllers6);

export default app;