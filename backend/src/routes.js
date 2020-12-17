import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get("/", async (req, res) => {
    const user = await User.create({
        name: "Guilherme",
        email: "guilherme.avelino@recode.org.br",
        password_hash: "12345"
    });
    
    return res.json(user)
})

export default routes;