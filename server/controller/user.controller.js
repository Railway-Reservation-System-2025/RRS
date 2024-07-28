import User from '../models/user.model.js'; // Import the User model

// Login user by email and password
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });
        
        if (!user) {
            return res.status(404).json({ error: 'Invalid email or password' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Error logging in' });
    }
};

// Update booking details for a user by email
export const updateUserBooking = async (req, res) => {
    const { email } = req.params;
    const { bookingDetails } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        user.bookingDetails = bookingDetails; // Update booking details
        await user.save();

        res.json(user);
    } catch (error) {
        console.error('Error updating booking details:', error);
        res.status(500).json({ error: 'Error updating booking details' });
    }
};

// Get booking details for a user by email
export const getUserBookings = async (req, res) => {
    const { email } = req.params;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json(user.bookingDetails);
    } catch (error) {
        console.error('Error fetching booking details:', error);
        res.status(500).json({ error: 'Error fetching booking details' });
    }
};

// Create a new user
export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        
        if (existingUser) {
            return res.status(400).json({ message: "User already exists! LogIn Instead" });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating account:', error);
        res.status(500).json({ error: 'Error creating account' });
    }
};
