const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Некорректный имаил').isEmail,
        check('password', 'мин 6 символов').isLength({min:6})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные '
            })
        }

        const {email, password} = req.body
        
        const candidate = await User.findOne({email})
        if(candidate){
            return res.status(400).json({message: 'Такой пользователь есть'})
        }
        const bashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})

        await user.save()

        res.status(201).json({message: 'пользователь создан '})

    } catch (e) {
        res.status(500).json({message: 'что то не так пробуй еще раз'})
    }
})

// /api/auth/login
router.post(
    '/login',
    [
        check('email','Введите корректный имеил').normalizeEmail().isEmail(),
        check('password', 'ВВедите пароль').exists()
    ], 
    async (req, res) => {
    try {
        const errors = validationResult(req)
    
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе '
            })
        }
        
        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({message: 'Пользователь не найден'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Неверный пароль'})
        }

        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})

    
    } catch (e) {
        res.status(500).json({message: 'что то не так пробуй еще раз'})
    }
})


module.exports = router