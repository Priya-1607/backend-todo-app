import express  from "express";
import { User } from "../modules/user.js";
import { isAuthenticated } from "../middleware/auth.js";
import { getAlluser, getMyProfile, login, logout} from "../controllers/user.js";


import { register } from "../controllers/user.js";
const router = express.Router();

// router.get("/speial", specialFunc)
// router.route("/me").get(getMyProfile)
// .put(updateUser).delete(deleteUser)

router.get("/me",isAuthenticated,getMyProfile)
    router.post("/new",register)
    router.post("/login",login)
    router.get("/logout",logout)
    export default router;