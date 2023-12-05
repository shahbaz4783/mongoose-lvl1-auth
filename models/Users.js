import mongoose from 'mongoose';
import encrypt from 'mongoose-encryption';

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
});

// To encrypt Password
// userSchema.plugin(encrypt, {
// 	secret: process.env.SECRET,
// 	encryptedFields: ['password'],
// });

const User = mongoose.model('Users', userSchema);

export default User;
