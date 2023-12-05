import User from '../models/Users.js';
import md5 from 'md5';
import bcrypt from 'bcrypt';

export const registerController = (req, res) => {
	res.render('register.ejs');
};

// md 5 Encryption
/*
export const postRegister = async (req, res) => {
	try {
		const email = req.body.email;
		const password = md5(req.body.password);

		const user = new User({
			email: email,
			password: password,
		});
		await user.save();
        res.redirect('/login')

	} catch (error) {
		console.log(error);
	}
};
*/

// bcrypt
export const postRegister = async (req, res) => {
	try {
        const saltRounds = 10;
		const email = req.body.email;
		const password = req.body.password;

		const hashedPassword = await bcrypt.hash(password, saltRounds);

		const user = new User({
			email: email,
			password: hashedPassword,
		});

		await user.save();
		res.redirect('/login');

	} catch (error) {
		console.log(error);
	}
};
