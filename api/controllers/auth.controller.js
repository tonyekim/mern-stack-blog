import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { email, username, password } = req.body;

  if (
    !email ||
    !email ||
    !password ||
    email === "" ||
    email === "" ||
    password === ""
  ) {
    // return res.status(400).json({ message: "All fields are required" });
    next(errorHandler(400, "All fields are required!!!!"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    email,
    username,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json({ message: "Signup successfull! " });
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      next(errorHandler(404, "User not found"));
    }

 
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      
      next(errorHandler(400, "Invalid password"));

    }

    const token = jwt.sign({ id: validUser._id }, "tonyekim");

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

// export const signin = async (req, res, next) => {
//   const { email, password } = req.body;

//   if (!email || !password || email === '' || password === '') {
//     next(errorHandler(400, 'All fields are required'));
//   }

//   try {
//     const validUser = await User.findOne({ email });
//     if (!validUser) {
//       return next(errorHandler(404, 'User not found'));
//     }
//     const validPassword = bcryptjs.compareSync(password, validUser.password);
//     if (!validPassword) {
//        next(errorHandler(400, 'Invalid password'));

//     }
//     const token = jwt.sign(
//       { id: validUser._id, isAdmin: validUser.isAdmin },
//       "tonyekim"
//     );

//     const { password: pass, ...rest } = validUser._doc;

//     res
//       .status(200)
//       .cookie('access_token', token, {
//         httpOnly: true,
//       })
//       .json(rest);
//   } catch (error) {
//     next(error);
//   }
// };
