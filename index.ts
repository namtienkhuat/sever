import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = 8080;

import { data } from "./data"; // Adjust the import based on your actual TypeScript file

app.use(express.static(path.join(__dirname, "")));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "", "index.html"));
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/about", (req, res) => {
    res.send(data);
});

app.get("/detailCourse/:id", (req, res) => {
    const userId = req.params.id;
    res.send(data.find((element) => element.id == userId));
});

app.get("/detailCourse/:id/learnCourse/:courseId", (req, res) => {
    console.log("req.params: ", req.params); // Sửa params thành req.params
    const courseId = req.params.id; // Sửa thành lessonId = req.params.id
    const lessonId = req.params.courseId; // Sửa thành courseId = req.params.courseId

    const course = data.find((element) => element.id == courseId);

    if (!course) {
        return res.status(404).send("Course not found");
    }

    const result = course.lesson.find((element) => element.id == lessonId);

    if (!result) {
        return res.status(404).send("Lesson not found");
    }

    res.send(result);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
