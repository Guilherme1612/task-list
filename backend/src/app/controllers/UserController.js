import User from '../models/User';

class UserController {
    async store(req, res) {

        const userExists = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (userExists) {
            return res.status(400).json({
                message: "O usuário já foi cadastrado"
            })
        }
        
        const { id, name, email } = await User.create(req.body);
        
        return res.status(201).json({
            id, 
            name, 
            email
        });
    }
}

export default new UserController();