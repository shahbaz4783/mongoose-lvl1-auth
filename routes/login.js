import express from 'express';
import { loginController } from '../controllers/login.js';

const router = express.Router();

router.get('/login', loginController);

export default router;
