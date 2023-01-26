const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken
};

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.status(200).json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        // Find the user by their email address
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error("User not found");
        // Check if the password matches
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error("Password doesnt match");
        res.status(200).json(createJWT(user));
    } catch {
        res.status(400).json('Bad Credentials');
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user)
    res.status(200).json(req.exp)
}

/*-- Helper Functions --*/

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}