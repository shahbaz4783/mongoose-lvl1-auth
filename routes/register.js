import express from 'express';
import { postRegister, registerController } from '../controllers/register.js';

const router = express.Router();

router.get('/register', registerController);
router.post('/register', postRegister);

export default router;
