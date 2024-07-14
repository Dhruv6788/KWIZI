const express = require("express");
const multer = require("multer");
const xlsx = require("xlsx");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Multer for file uploads
const upload = multer({ dest: "uploads/" });

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    methods: ["GET", "POST"], // Allowed methods
    allowedHeaders: ["Content-Type"], // Allowed headers
  })
);

let quizzes = {};

// Route to upload the configuration file
app.post("/uploadConfig", upload.single("configFile"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const workbook = xlsx.readFile(file.path);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);

  const config = {
    quizName: data[0]["Quiz name"],
    description: data[0]["Description"],
    startDate: data[0]["Start Date"],
    endDate: data[0]["End Date"],
    duration: data[0]["Duration"],
  };

  const quizId = new Date().getTime(); // Generate a unique ID for the quiz
  quizzes[quizId] = { config, questions: [] };

  res.json({ quizId, message: "Configuration File uploaded successfully" });
});

// Route to upload the main file
app.post("/uploadMain/:quizId", upload.single("mainFile"), (req, res) => {
  const quizId = req.params.quizId;
  if (!quizzes[quizId]) {
    return res.status(404).json({ message: "Quiz not found" });
  }

  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const workbook = xlsx.readFile(file.path);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(sheet);

  data.forEach((row) => {
    const question = {
      question: row["Question"],
      options: [
        row["Option 1"],
        row["Option 2"],
        row["Option 3"],
        row["Option 4"],
      ],
      answer: row["Question Answer"],
    };
    quizzes[quizId].questions.push(question);
  });

  res.json({ message: "Main file uploaded successfully" });
});

// Route to list all quizzes
app.get("/name", (req, res) => {
  res.json({ name: "dhruv" });
});

// Route to get the quiz
app.get("/quiz/:quizId", (req, res) => {
  const quizId = req.params.quizId;
  if (!quizzes[quizId]) {
    return res.status(404).json({ message: "Quiz not found" });
  }

  res.json({ quiz: quizzes[quizId], quizId });
});

// Route to handle quiz submission and calculate results
app.post("/submitQuiz/:quizId", (req, res) => {
  const quizId = req.params.quizId;
  if (!quizzes[quizId]) {
    return res.status(404).json({ message: "Quiz not found" });
  }

  const answers = req.body;
  let score = 0;
  const quiz = quizzes[quizId];

  quiz.questions.forEach((question, index) => {
    const userAnswer = answers[`question${index}`];
    if (userAnswer === question.answer) {
      score++;
    }
  });

  res.json({ score });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
