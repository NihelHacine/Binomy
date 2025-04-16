const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer  = require('multer')
const userRouter = express.Router();
const {registerRules,loginRules,validation} = require("../middlewares/validator");
const isAuth = require('../middlewares/passport');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
//register new user "post"
userRouter.post("/register",
  upload.single("photo"),            // multer en premier
  registerRules(),
  validation,
  async (req, res)=> {
  const { nom, prenom, cin, tel, email, password, gouvernorat, adresse, code_postal, about, role } = req.body;

  if (!req.file) {
    return res.status(400).send({ msg: "photo is required" });
  }

  const photoUrl = req.file.filename;

  try {
    const newuser = new User({
      nom, prenom, cin, tel, email, password, gouvernorat, adresse, code_postal, about, photo: photoUrl, role
    });

    const salt = 10;
    const gensalt = await bcrypt.genSalt(salt);
    const hashedpassword = await bcrypt.hash(password, gensalt);
    newuser.password = hashedpassword;

    const searcheduser = await User.findOne({ email });
    if (searcheduser) {
      return res.status(400).send({ msg: "email already exist" });
    }

    const newUserToken = await newuser.save();
    const payload = { _id: newUserToken._id, name: newUserToken.name };
    const token = jwt.sign(payload, process.env.SecretOrKey, { expiresIn: 3600 });

    res.status(200).send({ newUserToken, msg: "user is saved", token: `Bearer ${token}` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "can not save the user" });
  }
});


//login
userRouter.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exists
    const searcheduser = await User.findOne({ email });

    // if the email does not exist
    if (!searcheduser) {
      return res.status(400).send({ msg: "Vérifiez vos informations" });
    }

    // ⚠️ Bloquer l'accès si l'état est "en cours"
    if (searcheduser.etat === "en cours") {
      return res.status(403).send({ msg: "Votre compte est en attente de validation par l'administrateur." });
    }

    // if the passwords are not equal
    const match = await bcrypt.compare(password, searcheduser.password);
    if (!match) {
      return res.status(400).send({ msg: "Vérifiez vos informations" });
    }

    // create a token
    const payload = {
      _id: searcheduser._id,
      name: searcheduser.name,
    };

    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });

    // send the user
    res.status(200).send({
      user: searcheduser,
      msg: "success",
      token: `Bearer ${token}`,
    });

  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Impossible de trouver l'utilisateur" });
  }
});


//get current profile
userRouter.get("/current", isAuth(),(req,res) => {
    res.status(200).send({user:req.user});
})

//update user
userRouter.put("/:_id", async (req, res) => {
    try {
      let result = await User.findByIdAndUpdate(
        { _id: req.params._id },
        { $set: req.body }
      );
      res.send({ msg: " user updated " });
    } catch (error) {
      res.send({ msg: "fail" });
      console.log(error);
    }
  });

//get allusers
userRouter.get("/allusers", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ users: result, msg: "all users " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

//delete user 
userRouter.delete("/:_id", async (req, res) => {
  try {
    let result = await User.findByIdAndDelete({ _id: req.params._id });
    res.send({ msg: "user deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});




module.exports = userRouter; 