const express = require('express');
const bcrypt = require('bcryptjs');

const userDb = require('./authModel.js');
const authMiddleware = require('./authModdleware.js')

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'base auth route is printing something!!!'});
});


//#region API DOCS for LOGIN EXISTING USER
/** 
 * @api {post} /authRoute/login Login Existing User
 * @apiName AuthLogin
 * @apiGroup Register and Login
 *  
 * @apiParam {String} username Username, unique
 * @apiParam {Password} password Password
 * 
 * @apiParamExample {json} Login Request Example:
 *   {
 *     "username": "j1",
 *     "password": "pass"
 *   }
 * 
 * @apiSuccess {String} message `${username}, welcome back!`
 * @apiSuccess {String} token jsonWebToken
 * @apiSuccess {Object} userObject Includes username, firstName, lastName, userId
 * 
 * @apiSuccessExample Successful Login Response
 * {
 *   "message": "j1, welcome back!",
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJ1c2VybmFtZSI6ImoxIiwiaWF0IjoxNTY5NDI1MjI0LCJleHAiOjE1Njk1MTE2MjR9.qVp-bRGKBVmisLHjh2apYisEEVYzEs3HmxPnJfE0li0",
 *   "userObject": {
 *     "username": "j1",
 *     "lastName": "W1",
 *     "firstName": "J1",
 *     "userId": 1
 *    }
 * }
 * 
 */
//#endregion

 router.post('/login', (req, res) => {
    let user = req.body;
    console.log('req from login', user)

    userDb.findUserByUsername({username: user.username})
        .first()
        .then(userInfo => {
            console.log('userInfo from the then block', userInfo)
            if(user && bcrypt.compareSync(user.password, userInfo.password)) {
                const token = userDb.generateToken(userInfo);
                res.status(200).json({
                    message: `${userInfo.username}, welcome back!`,
                    token,
                    userObject: {
                        username: userInfo.username,
                        lastName: userInfo.lastName,
                        firstName: userInfo.firstName,
                        userId: userInfo.id
                    }
                })
            } else {
                res.status(401).json({message: 'invalid username or password'})
            }
        })
        .catch(error => {
            res.status(500).json({message: `There was an error logging in: ${error}!`})
        })
}) 


//#region  API DOCS FOR REGISTER NEW USER (BELOW)
/** 
 * @api {post} /authRoute/register Register New User
 * @apiName AuthRegister
 * @apiGroup Register and Login
 *  
 * @apiParam {String} username Username, unique
 * @apiParam {Password} password Password
 * @apiParam {String} firstName User's first name, not unique
 * @apiParam {String} lastName User's last name, not unique
 * 
 * @apiParamExample {json} Register Request Example:
 *   {
 *     "username": "CharlieB",
 *     "password": "pass",
 *     "firstName": "Charlie",
 *     "lastName": "Brown"
 *   }
 * 
 * @apiSuccess {Object} userObject Includes username, firstName, lastName, userId
 * @apiSuccess {String} token jsonWebToken
 * 
 * @apiSuccessExample {json} Example-Register-Response
 *   {
 *    "userObject": {
 *      "firstName": "Charlie",
 *      "lastName": "Brown",
 *      "username": "CharlieB",
 *      "userId": 2
 *    },
 *    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyLCJ1c2VybmFtZSI6IkNoYXJsaWVCIiwiaWF0IjoxNTY5NDI1NzYyLCJleHAiOjE1Njk1MTIxNjJ9.wjcFRdHTdgVYyexUntNTg1FBDg-9Vu9SSYW3Pknz4_8"
 *   }
 * 
 */
//#endregion

router.post('/register', authMiddleware.validateRegisterPost, (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;

    userDb.addUser(user) 
        .then(saved => {
            // res.status(201).json(saved)
            console.log(saved)
            userDb.findUserById(saved) 
                .then(results => {
                    const token = userDb.generateToken(results[0])
                    res.status(201).json({
                        userObject: {
                            firstName: results[0].firstName,
                            lastName: results[0].lastName,
                            username: results[0].username,
                            userId: results[0].id
                        },
                        token
                    })
                })
                .catch(error => {
                    res.status(500).json(error)
                })
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
}) 

module.exports = router;