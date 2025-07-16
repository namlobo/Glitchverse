// //logic for /register
// controllers/authController.js

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register logic
const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(409).json({ message: "Username already taken" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login logic
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, username: user.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { register, login };



// const User = require('../models/User');
// const bcrypt = require('bcrypt');

// const register = async (req,res) => {
//     try {
//         const { username, email, password} = req.body;

//         const existingUser = await User.findOne({ email}); //check if user exists
//         if(existingUser) return res.status(400).json({ message: "User already exists"});

//         //hash password
//         const hashedPassword = await bcrypt.hash(password,10);

//         //create new user
//         const newUser = new User({
//             username,
//             email,
//             password: hashedPassword
//         });
         
//         await newUser.save(); //this saves it to the db 
//         res.status(201).json({message: "User registered successfully" });
//     }catch (err){
//             console.error(err);
//             res.status(500).json({ message: "Server error" });
//         }
    
//     };

// module.exports = {register};

