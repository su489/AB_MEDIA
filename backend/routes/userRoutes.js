import express from 'express';
import {
  registerController,
  getAllUsers,
  loginController
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerController);
router.post('/login', loginController);
router.get('/users', getAllUsers);

export default router;
