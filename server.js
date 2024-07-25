import express from "express";

const app = express();
const PORT = 5362;

app.get("/", (req, res) => {
  res.json({message: "Hello server"})
});


app.listen(PORT, ()=> {
    console.log(`Server is running at http://localhost:${PORT}`)
})