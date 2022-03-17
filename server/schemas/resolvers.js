const { AuthenticationError } = require("apollo-server-express");
const { User, Question } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    allQuestions: async () => {
      return Question.find();
    },

    oneQuestion: async (parent, { questionId }) => {
      return Question.findOne({ _id: questionId });
    },
  },

  Mutation: {
    addUser: async (_parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (_parent, { unsername, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("No user was found with this account.");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect username or password");
      }

      const token = signToken(user);
      return { token, user };
    },

    //Fill these in later. 

    addQuestion: async (
      _parent,
      { title, teachingText, questionText, region, options, rightAnswerIndex }
    ) => {},
    updateQuestion: async (
      _parent,
      { title, teachingText, questionText, region, options, rightAnswerIndex }
    ) => {},

    removeQuestion: async (parent, { questionId }) => {
      return Question.findOneAndDelete({ _id: questionId });
    },
  },
};

module.exports = resolvers;
