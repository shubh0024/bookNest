import express from 'express';
import {getBook} from '../controller/book.controller.js';


const router = express.Router();

router.get('/',getBook); //later change it api to getBook



export default router;