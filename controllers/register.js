import User from '../models/Users.js';

export const registerController = (req, res) => {
	res.render('register.ejs');
};

export const postRegister = async (req, res) => {
	try {
		const email = req.body.email;
		const password = req.body.password;

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
