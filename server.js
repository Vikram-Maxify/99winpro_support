import express from "express"
import bodyParser from "body-parser"
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

// Define __dirname manually
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express()

app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/dist/index.html"));
});


const port = 3038


app.listen(port,()=>{
    console.log(`Server run on port ${port}`)
})