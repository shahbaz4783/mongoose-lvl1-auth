import md5 from 'md5';
import User from '../models/Users.js';

export const loginController = (req, res) => {
	res.render('login.ejs');
};


export const postLogin = async (req, res) => {
	try {
		const email = req.body.email;
		const password = md5(req.body.password);

		const user = await User.findOne({ email: email });

		if (user) {
			if (user.password === password) {
				res.render('secret.ejs');
			} else {
				res.status(401).send('Your Email or Password is Incorrect');
			}
		} else {
			res.status(404).send('User not found');
		}
	} catch (error) {
		console.error(error);
		res.status(500).send('Internal Server Error');
	}
};