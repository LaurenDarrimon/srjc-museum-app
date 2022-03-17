const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String 
    password: String 
  }

  type Question {
    _id: ID
    title: String
    teachingText: String
    questionText: String
    region: String
    options: [Choice]
    rightAnswerIndex: Int
  }

  type Choice {
    choice: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    allQuestions: Question
    oneQuestion(questionId: ID!): Question
  }
    
  type Mutation {
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addQuestion(title: String!, teachingText: String!, questionText: String, region: String, options: [Choice], rightAnswerIndex: Int, ): Question
    updateQuestion(title: String!, teachingText: String!, questionText: String, region: String, options: [Choice], rightAnswerIndex: Int, ): Question
    removeQuestion(_id: ID!): Question
  }
`;

module.exports = typeDefs;
