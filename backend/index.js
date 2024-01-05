import express, { response } from "express";
import {PORT} from "./config.js";

const app = express();

app.get("/", (req, resp) => {
    console.log(req);
    return resp.status(234).send("Welcome to the MERN Stack Tutorial")
})

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})