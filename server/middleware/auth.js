const models = require('../models');
const parseCookies = require('./cookieParser.js');

module.exports.createSession = (req, res, next) => {
  // check to see if cookies exist

  // create new session set to empty object
  // if session does not exist
  // create hash set to req.cookies.shortlyid
  // create new session
  if (Object.keys(req.cookies).length === 0) {
    req.session = {};
    models.Sessions.create()
      .then((result) => {
        models.Sessions.get({ id: result.insertId })
        .then((result) => {
          // take result.hash and assign to session object
          req.session.hash = result.hash;
          // assign same hash as shortlyid cookie value in req.cookies
          res.cookie('shortlyid', result.hash);
          next();
        })
      .catch ((err) => console.error(err));
    })
  } else {
    // console.log('req', req); // has cookies
    req.session = {'hash': ''};
    models.Sessions.get({ hash: req.cookies.shortlyid })
     .then((result) => {
       req.session.hash = result.hash;
       next();
     })
     .catch((err) => console.error(err))
  }
};


/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

