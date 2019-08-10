const models = require('../models');
const parseCookies = require('./cookieParser.js');

module.exports.createSession = (req, res, next) => {
  // check to see if cookies exist

  // create new session set to empty object
  // if session does not exist
    // create hash set to req.cookies.shortlyid
    // create new session
    console.log('FUNCTION IS HITTING!!!!!!!!');
  req.session = {};
  if (Object.keys(req.cookies).length === 0) {
    models.Sessions.create()

      .then((result) => {
        models.Sessions.get({id: result.insertId})

        .then((result) => {
          console.log('RESULT!!', result);
          // take result.hash and assign to session object
          // assign same hash as shortlyid cookie value in req.cookies
        })
        .catch((err) => console.log(err));
      })

  }
    // .then((result) => {
    //   console.log('Result is here here here',result);
    //   if (!result) {
    //     var hash = req.cookies.shortlyid;
    //   }
    // })
    // .catch(err => console.log('err))
  next();
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

