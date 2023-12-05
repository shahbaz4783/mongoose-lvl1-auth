import md5 from 'md5';
import User from '../models/Users.js';

export const registerController = (req, res) => {
	res.render('register.ejs');
};

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
