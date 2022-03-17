const { Schema, model } = require("mongoose");

const questionSchema = new Schema({
  title: { type: String },
  teachingText: { type: String },
  questionText: { type: String },
  region: { type: String },
  options: [
    {
      choice: {
        type: String,
      },
    },
  ],
  rightAnswerIndex: { type: Number },
});

const Question = model("Question", questionSchema);

module.exports = Question;
