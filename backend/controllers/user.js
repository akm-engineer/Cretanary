import User from "../model/user.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    // Getting data from request body
    const { name, email, password } = req.body;

    // Checking for duplicacy
    const oldUser = await User.findOne({ email });
    if (oldUser) return res.status(401).json({ error: "Email already exists" });

    // Creating a new user instance
    const newUser = new User({ name, email, password });

    // Saving the new user to the database
    await newUser.save();

    // Respond with user information
    res.status(201).json({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    // Handling errors
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
};

export const signIn = async (req, res) => {
  try {
    // Getting data from request body
    const { email, password } = req.body;

    // Find user in our db by email
    const signInUser = await User.findOne({ email });
    if (!signInUser)
      return res.status(401).json({ error: "Email/password mismatch" });

    // Comparing password with our db
    const matched = await signInUser.comparePassword(password);
    if (!matched)
      return res.status(401).json({ error: "Email/password mismatch" });

    // Extracting data after sign-in
    const { _id, name, role } = signInUser;

    // Generate JWT token :- used by front-end to authenticate backend
    const jwtToken = jwt.sign({ userId: _id }, process.env.JWT_SECRET);

    // Respond with user information and the JWT token
    res.json({
      signInUser: {
        id: _id,
        name,
        role,
        email,
        token: jwtToken,
      },
    });
  } catch (error) {
    // Handling errors
    console.error("Error signing in user:", error);
    res.status(500).json({ error: "An error occurred while signing in." });
  }
};

export const changePassword = async (req, res) => {
  try {
    // Extract password and confirm_password from request body
    const { password, confirm_password } = req.body;

    // Check if both password and confirm_password are provided
    if (password && confirm_password) {
      // Check if password matches confirm_password
      if (password === confirm_password) {
        // Extract user ID from request user object (obtained from authentication middleware)
        const userId = req.user?._id;

        // If user ID is not found, return error
        if (!userId) {
          return res
            .status(401)
            .json({ error: "User ID not found in request" });
        }

        // Find user by ID in the database
        const user = await User.findById(userId);

        // If user is not found, return error
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }

        // Update user's password
        user.password = password;
        await user.save();

        // Return success message
        res.status(200).json({ message: "Password changed successfully" });
      } else {
        // If password and confirm_password do not match, return error
        res.status(400).json({ error: "Passwords do not match" });
      }
    } else {
      // If either password or confirm_password is missing, return error
      res.status(400).json({ error: "All fields are required" });
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
