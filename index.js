import express from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";


const app = express();
const PORT = 8888;

app.use(bodyParser.json());

const SECRET = "Ripkovych";

const users = [
    { id: 1, username: "user1", password: "1234" },
    { id: 2, username: "user2", password: "1111" }
];

app.get("/time", (req, res) => {
    res.json({
        time: new Date()
    });
});

app.post("/login", (req, res) => {

    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).send("Invalid login");
    }

    const token = jwt.sign(
        { id: user.id, username: user.username },
        SECRET,
        { expiresIn: "3h" }
    );

    res.json({
        message: "Login success",
        token: token
    });

});

app.use((req, res) => {
    res.status(404).send("Not Found");
});

app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});