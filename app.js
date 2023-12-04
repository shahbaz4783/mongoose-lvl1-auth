import expres from 'express';
import 'dotenv/config';
import staticRoutes from './routes/static.js';
import loginRoute from './routes/login.js';
import registerRoute from './routes/register.js';
import { connectDB } from './config/db.js';

connectDB();
const app = expres();

app.use(expres.urlencoded({ extended: true }));
app.use(expres.static('public'))

app.use(staticRoutes);
app.use(loginRoute);
app.use(registerRoute);

app.listen(process.env.PORT, () => {
	console.log(`Server is listening on port ${process.env.PORT}`);
});
