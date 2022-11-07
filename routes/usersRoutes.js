var express = require("express");
var router = express.Router();
const path = require('path');
var jwt = require("jsonwebtoken");
const {
  userlist,
  useradd,
  login,
  forgotpassword,
  mobilesend,
  changepassword,
  otpverify,
  forgotpassword1,
  forgotpassword2,
} = require("../controllers/userControlles");

jwtkey = (req, res, next) => {
  let token = req.headers.authorization;
  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, process.env.SECRETKEY, (err, valid) => {
      if (err) {
        res.status(401).send("Please provide Valid token ");
      } else {
        next();
      }
    });
    // console.log("middleware", token)
    // next()
  } else {
    res.status(403).send("Please add token with header ");
  }
};

router.get("/", function (req, res, next) {
  res.render("index");
});
router.get("/login", function (req, res, next) {
  res.render("login",{data:false});
});
router.get("/auth-registration", function (req, res, next) {
  res.render("auth-registration", { data: false });
});
router.get("/list", jwtkey, userlist);

router.post("/register", useradd);
router.post("/login", login);
router.get("/forgotpassword", forgotpassword);
router.get("/forgotpassword1", forgotpassword1);
router.get("/forgotpassword2", forgotpassword2);
router.post("/otpverify", otpverify);

router.post("/mobile-send", mobilesend);
router.post("/changepassword/:id", changepassword);

module.exports = router;


router.get("/views/EVOWNER/2wheel/2owner", function (req, res) {

  res.render('2owner.ejs')
});
router.get("/EVOWNER/2wheel/2owner",(req,res)=>{
  res.render("2owner")
})
router.get("/EVOWNER/3wheel/3owner.html", function (req, res) {
  res.render('3owner.ejs')
});
router.get("/EVOWNER/4wheel/4owner.html", function (req, res) {
  
  res.render('4owner.ejs')
});

router.get("/Files/BLOG/blog", function (req, res) {
  
  res.render('blog')
});
router.get("/Files/ABOUT/aboutusss", function (req, res) {
  
  res.render('aboutusss')
});
router.get("/Files/SUPPORT/support", function (req, res) {
  
  res.render('support')
});
router.get("/2NDEVOWNER/2wheelbulk/2bulk", function (req, res) {
  
  res.render('2bulk')
});
router.get("/2NDEVOWNER/2wheelbulk/Emergency", function (req, res) {
  
  res.render('Emergency')
});
router.get("/2NDEVOWNER/2wheelbulk/Custom", function (req, res) {
  
  res.render('Custom')
});
router.get("/2NDEVOWNER/2wheelbulk/parts", function (req, res) {
  
  res.render('parts')
});
router.get("/2NDEVOWNER/2wheelbulk/maintain", function (req, res) {
  
  res.render('maintain')
});
router.get("/2NDEVOWNER/2wheelbulk/Washing", function (req, res) {
  
  res.render('Washing')
});
router.get("/2NDEVOWNER/2wheelbulk/query", function (req, res) {
  
  res.render('query')
});
router.get("/2NDEVOWNER/2wheelbulk/ABOUT/aboutuss", function (req, res) {
  
  res.render('aboutuss')
});
router.get("/2NDEVOWNER/2wheelbulk/SUPPORT/support1", function (req, res) {
  
  res.render('support1')
});
router.get("/2NDEVOWNER/3wheelbulk/3bulk", function (req, res) {
  
  res.render('3bulk')
});
router.get("/2NDEVOWNER/3wheelbulk/3bulk", function (req, res) {
  
  res.render('3bulk')
});
router.get("/2NDEVOWNER/3wheelbulk/Emergency", function (req, res) {
  
  res.render('Emergency')
});

router.get("/2NDEVOWNER/3wheelbulk/Custom", function (req, res) {
  
  res.render('Custom')
});
router.get("/2NDEVOWNER/3wheelbulk/parts", function (req, res) {
  
  res.render('parts')
});
router.get("/2NDEVOWNER/3wheelbulk/maintain", function (req, res) {
  
  res.render('maintain')
});
router.get("/2NDEVOWNER/3wheelbulk/Washing", function (req, res) {
  
  res.render('Washing')
});
router.get("/2NDEVOWNER/3wheelbulk/query", function (req, res) {
  
  res.render('query')
});
router.get("/2NDEVOWNER/3wheelbulk/3bulk", function (req, res) {
  
  res.render('3bulk')
});

