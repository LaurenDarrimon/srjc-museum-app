const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String 
    password: String 
  }

  type Question {
    title: String
    teachingText: String
    questionText: String
    answers: [Choice]
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
    users: [User]
    user(username: String!): User
    allQuestions: Project
    oneQuestion(questionId: ID!): Question
  }
    
  type Mutation {
    login(username: String!, password: String!): Auth
    signup(username: String!, password: String!): Auth
    addQuestion(name: String!, githubUser: String!): Question
    updateQuestion(name: String!, githubUser: String!): Question
    removeQuestion(githubUser: ID!): User
  }
`;

module.exports = typeDefs;