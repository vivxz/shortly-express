const parseCookies = (req, res, next) => {
  var cookieObject = {};
  if (req.headers.cookie){
    var cookieArray = req.headers.cookie.split('; ');
    cookieArray.forEach((cooks) => {
      var cookieArr = cooks.split('=');
      cookieObject[cookieArr[0]] = cookieArr[1];
    })
  }
  req.cookies = cookieObject;
  next();
};

module.exports = parseCookies;