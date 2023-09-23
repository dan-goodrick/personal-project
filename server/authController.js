import {User} from './model.js'
import bcrypt from 'bcryptjs'

export default {
    register: async (req, res) => {
        console.log('register')
        try {
            const {email, password} = req.body
            const foundUser = await User.findOne({where: {email}})
            if(foundUser){
                res.status(400).send('That email is already taken.')
            } else {
                const salt = bcrypt.genSaltSync(10)              
                const newUser = await User.create({email, password: bcrypt.hashSync(password, salt)})
                console.log(newUser)
                req.session.user = {
                    userId: newUser.email,
                    name: newUser.firstName + " " + newUser.lastName
                }
                res.status(200).send(req.session.user)
            }

        } catch(err){
            console.log(err)
            res.sendStatus(500)
        }
    },
    login: async (req, res) => {
        console.log('login')
        try {
            const {email, password} = req.body 

            const user = await User.findOne({where: {email}})

            if(!user){
                res.status(400).send('There was no user found with that email.')
            } else {
                const isAuthenticated = bcrypt.compareSync(password, user.password)

                if(isAuthenticated){
                    req.session.user = {
                        userId: user.email,
                        name: user.firstName + " " + user.lastName
                    }

                    res.status(200).send(req.session.user)
                } else {
                    res.status(401).send('That password is incorrect.')
                }
            }
        } catch (err){
            console.log(err)
            res.sendStatus(500)
        }

    },
    checkUser: async (req, res) => {
        console.log('checkUser')
        if(req.session.user){
            res.status(200).send(req.session.user)
        } else {
            res.status(400).send('There is no user on the session')
        }
    },
    logout: async (req, res) => {
        console.log('logout')
        req.session.destroy()
        res.sendStatus(200)
    }
}