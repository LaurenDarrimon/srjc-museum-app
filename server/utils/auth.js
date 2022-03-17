const jwt = require('jsonwebtoken');

const secret = 'gamesecretsecret';
const expiration = '4h';

module.exports = {
  authMiddleware: function ({ req }) {
    // looks for the the token anywhere in the req body or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // return just the token itself if there are other things attached to it
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // if token can be verified, add the user data to req before handing to resolvers
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Sorry, this token is invalid');
    }

    // return req and pass to resolver for context
    return req;
  },
  signToken: function ({ email, githubUser, _id }) {
    const payload = { email, githubUser, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};