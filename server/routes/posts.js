import  express from "express";
import { getpost,createPost } from "../controllers/posts.js";

const router=express.Router();

router.get('/',getpost);
router.post('/',createPost);

export default router;