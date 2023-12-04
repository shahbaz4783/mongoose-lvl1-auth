import express from 'express';
import { loginController, postLogin } from '../controllers/login.js';

const router = express.Router();

router.get('/login', loginController);
router.post('/login', postLogin);


export default router;
