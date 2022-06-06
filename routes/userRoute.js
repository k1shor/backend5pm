const express = require('express')
const { addUser, confirmUser, resendConfirmation, forgetpassword, resetPassword, userlist, userDetails, updateUser, deleteUser, signin, signout } = require('../controllers/userController')
const { userRules, validation } = require('../validation')
const router = express.Router()

router.post('/register',userRules, validation,addUser)
router.get('/confirmuser/:token',confirmUser)
router.post('/resendconfirmation',resendConfirmation)
router.post('/forgetpassword',forgetpassword)
router.post('/resetpassword/:token', resetPassword)
router.get('/userlist',userlist)
router.get('/userdetails/:user_id', userDetails)
router.put('/userupdate/:user_id', updateUser)
router.delete('/user/delete/:userid', deleteUser)
router.post('/signin',signin)
router.get('/signout',signout)

module.exports = router