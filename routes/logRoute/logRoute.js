const router = require('express').Router();
const logDb = require('./logModel.js');
const authMiddleware = require('../authRoute/authenticate-middleware.js');
const logMiddleware = require('./logMiddleware.js')

<<<<<<< HEAD
=======

//#region API DOCS for CREATE NEW USER LOG
/** @api {post} /logRoute/ Add New Log
 * @apiName PostNewLog
 * @apiGroup User-Logs 
 * 
 * @apiParam {Obj} newLog Object containing new user log, requires all fields listed below (userId is read automatically)
 * @apiParam {String} baitType Type of bait used
 * @apiParam {Number} waterBodyId Id of water body 
 * @apiParam {String} fishId Name of the fish (Do NOT send fishId! This is converted on the backend and the fishName is added to 'fish-types' table, if new)
 * @apiParam {Number} fishCount Amount of fish caught 
 * @apiParam {Number} timeSpent Amount of time spent fishing (in hours, decimals OK)
 * @apiParam {Date} timeOfDay Time of day the user fished, include as a string ("6:30 am")
 * 
 * @apiParamExample Example Post Body:  
 *   {
 *     "baitType": "worms",
 *     "waterBodyId": 1,
 *     "fishId": "grouper",
 *     "fishCount": 3,
 *     "timeSpent": 1.5,
 *     "timeOfDay": "6:30 am"
 *   }
 *  
 * @apiSuccess {Number} logID ID of newly created log
 * 
 * @apiSuccessExample Successfully posted new user log
 * HTTP/1.1 200 OK
 * 
 *  5 <--where 5 is the ID of the newly created user log
 * 
 * @apiError waterBodyNotFound Could not find a water body with that id: id
 * @apiErrorExample 
 * HTTP/1.1 404 Not Found
 *  { 
 *    "message": "Can't find water body with id of 11234" 
 *  }
 * 
 */
//#endregion

>>>>>>> 56dbba2931262e92e87a2948990cf0a92294a645
router.post('/', logMiddleware.checkWaterBodyId, logMiddleware.validatePost, authMiddleware, logMiddleware.attachFishId, (req, res) => {
    let log = req.body;
    log.userId = req.user.id;
    console.log(log)

    logDb.addLog(log)
        .then(results => {
            res.status(201).json(results)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
});


//#region API DOCS FOR GET USER LOGS BY LOGGED IN USER
/** 
 * @api {get} /logRoute/user-logs Get User Logs for Current User
 * @apiName getLogsByLoggedInUser 
 * @apiGroup User-Logs
 * @apiDescription Get User Logs for the Logged In User (e.g., "My Logs")
 * 
 * @apiParam {Number} userID ID is read automatically if user is logged in. No need to send anything else.
 * 
 * @apiParamExample Example Request Body
 *   n/a! The userID is read automatically. Just navigate to the /user-logs route!
 * 
 * @apiSuccess {Array} logsArray Returns an array of objects, where each object is a user log. Returns an empty array if user has no logs. 
 * 
 * @apiSuccessExample Example-Response 
 * [
 *   {
 *     "username": "j1",
 *     "userId": 1,
 *     "log_id": 1,
 *     "waterBodyId": 1,
 *     "fishName": "red salmon",
 *     "fishCount": 3,
 *     "baitType": "worms",
 *     "timeSpent": 4,
 *     "timeOfDay": "9:00 am",
 *     "facilityName": "Cow Lake",
 *     "latitude": 47.135255996919575,
 *     "longitude": -118.15495300359936
 *   },
 *   {
 *     "username": "j1",
 *     "userId": 1,
 *     "log_id": 2,
 *     "waterBodyId": 1,
 *     "fishName": "pink salmon",
 *     "fishCount": 1,
 *     "baitType": "plastic",
 *     "timeSpent": 2,
 *     "timeOfDay": "6:30 am",
 *     "facilityName": "Cow Lake",
 *     "latitude": 47.135255996919575,
 *     "longitude": -118.15495300359936
 *   }
 * ]
 * 
 * @apiError noCredentials No credentials provided to see protected content. 
 * @apiErrorExample Example-Error: 
 * HTTP 1.1 401 Unauthorized
 *  {
 *    "message": "No credentials provided. Please login to view this content."
 *  }
 */
//#endregion

router.get('/user-logs', authMiddleware, (req, res) => {
    logDb.getLogsByUserId(req.user.id)
        .then(results => {
            res.status(200).json(results)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
});

<<<<<<< HEAD
=======

//#region API DOCS for GET USER LOGS BY USER ID 
/** 
 * @api {get} /logRoute/user-logs/:id Get User Logs by User ID
 * @apiName getLogsById
 * @apiGroup User-Logs
 * @apiDescription Get user logs for any user in the database. Requires user to be logged in. 
 * 
 * @apiParam {Number} id User ID is read from req.params.id (e.g., "/logRoute/user-logs/2").
 * 
 * @apiSuccess {Array} logsArray Returns an array of objects, where each object is a user log. Returns an error message if user is not found or if user has no logs. See errors below. 
 
 * @apiSuccessExample Example-Response 
 * [
 *   {
 *     "username": "j1",
 *     "userId": 1,
 *     "log_id": 1,
 *     "waterBodyId": 1,
 *     "fishName": "red salmon",
 *     "fishCount": 3,
 *     "baitType": "worms",
 *     "timeSpent": 4,
 *     "timeOfDay": "9:00 am",
 *     "facilityName": "Cow Lake",
 *     "latitude": 47.135255996919575,
 *     "longitude": -118.15495300359936
 *   },
 *   {
 *     "username": "j1",
 *     "userId": 1,
 *     "log_id": 2,
 *     "waterBodyId": 1,
 *     "fishName": "pink salmon",
 *     "fishCount": 1,
 *     "baitType": "plastic",
 *     "timeSpent": 2,
 *     "timeOfDay": "6:30 am",
 *     "facilityName": "Cow Lake",
 *     "latitude": 47.135255996919575,
 *     "longitude": -118.15495300359936
 *   }
 * ]
 * 
 * 
 * @apiSuccess noLogsForUser This user is in the databse, but has no logs. 
 * @apiSuccessExample No User Logs Found: 
 * HTTP 1.1 204 No Content
 *  {
 *    "message": "We couldn't find any logs for this user: 2."
 *  } 
 * 
 * @apiError userIdNotFound No user with that ID could be found. 
 * @apiErrorExample Example Error: 
 * HTTP 1.1 404 Not Found
 *  {
 *    "message": "UserId 212 can't be found."
 *  } 
 * 
 */
//#endregion

>>>>>>> 56dbba2931262e92e87a2948990cf0a92294a645
router.get('/user-logs/:id', logMiddleware.checkUserId, (req, res) => {
    logDb.getLogsByUserId(req.params.id)
        .then(results => {
            if(results.length > 0) {
                res.status(200).json(results)
            } else {
<<<<<<< HEAD
                res.status(404).json({message: 'user has no logs'})
=======
                res.status(404).json({message: `We couldn't find any logs for this user: ${req.params.id} `})
>>>>>>> 56dbba2931262e92e87a2948990cf0a92294a645
            }
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
}); 


//#region API DOCS for DELETE USER LOG
/**
 * @api {delete} /logRoute/user-logs/delete-logs/:id Delete a user log 
 * @apiName deleteUserLog
 * @apiDescription User must be logged in to delete a log. Users can only delete their own logs. 
 * @apiGroup User Logs
 * 
 * @apiParam {Number} logId Log ID is read from req.params.id (e.g., "/user-logs/delete-logs/2")
 * @apiSuccess {Number} numberOfRecordsDeleted Returns the number of records deleted. Expected to be 1. 
 * 
 * 
 */
//#endregion

router.delete('/user-logs/delete-logs/:id', authMiddleware, logMiddleware.validateUserId, (req, res) => {
    logDb.deleteLog(req.params.id) 
        .then(results => {
            if(results) {
                res.status(200).json({message: `log with id ${req.params.id} has been deleted`, results})
            } else {
                res.status(404).json({message: `log with id ${req.params.id} can not be found`})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'unable to delete entry'})
        })
})


router.get('/user-logs/update-logs/:id', (req, res) => {
    logDb.getLogById(req.params.id)
        .then(results => {
            if(results.length > 0) {
                res.status(200).json(results)
            } else {
                res.status(404).json({message: 'log id does not exist'})
            }
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})

<<<<<<< HEAD
router.put("/user-logs/update/:id", logMiddleware.checkWaterBodyId, authMiddleware, logMiddleware.validatePost, logMiddleware.validateUserId, logMiddleware.attachFishId, (req, res) => {
=======
>>>>>>> 56dbba2931262e92e87a2948990cf0a92294a645

//#region API DOCS for UPDATE USER LOG BY LOG ID
/**
 * @api {put} /logRoute/user-logs/:id Update User Log
 * @apiName UpdateLog
 * @apiDescription Update an existing log. 
 * Users must be logged in to update a log and can only update their own logs. 
 * NOTE: The ":id" in the url refers to the LOG id (not user or waterBody ID).
 * @apiGroup User Logs
 * 
 * @apiParam {String} baitType Type of bait used
 * @apiParam {Number} waterBodyId REQUIRED: Id of water body
 * @apiParam {String} fishId REQUIRED: Name of the fish (Do NOT send fishId! This is converted on the backend and the fishName is added to 'fish-types' table, if new)
 * @apiParam {Number} fishCount Amount of fish caught 
 * @apiParam {Number} timeSpent Amount of time spent fishing (in hours, decimals OK)
 * @apiParam {Date} timeOfDay Time of day the user fished, include as a string ("6:30 am")
 * 
 * @apiParamExample Example PUT Body:  
 *   {
 *     "baitType": "worms",
 *     "waterBodyId": 1,
 *     "fishId": "red grouper",
 *     "fishCount": 4,
 *     "timeSpent": 2.0,
 *     "timeOfDay": "6:30 am"
 *   }
 * 
 * @apiError missingFields Error Updating User Log: the request is missing either the waterBodyId or fishId
 * @apiErrorExample Error Updating User Log:
 *   {
 *     "message": "Missing either waterBodyId or fishId"
*    }
 * 
 * @apiError userIdMismatch Error Validating User: The userID of current user is different that the userID on the log.
 * @apiErrorExample Error Validating User
 * HTTP 1.1 403 Forbidden
 *   { 
 *     "message": 'UserId mismatch: users can only modify their own posts.'
 *   }
 * 
 * @apiError noCredentials Error Authorizing User: No Authorization header was included in the request.
 * @apiErrorExample Error Authorizing User
 * HTTP 1.1 401 Unauthorized
 *   { 
 *     "message": 'No credentials provided. Please login to access this content.'
 *   }* 
 * 
 * @apiError WaterBodyNotFound No water body could be found with the provided waterBodyId
 * @apiErrorExample Water Body Not Found
 * HTTP/1.1 404 Not Found
 *   { 
 *      "message": "Can't find water body with id of 112312"
 *   }
 * 
 */
//#endregion

router.put("/user-logs/update/:id", logMiddleware.checkWaterBodyId, authMiddleware, logMiddleware.validatePost, logMiddleware.validateUserId, logMiddleware.attachFishId, (req, res) => {
    logDb.updateLog(req.params.id, req.body)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({message: `There was an error updating this post: ${err}`})
        })
})


//#region API DOCS for GET USER LOGS BY WATER BODY ID
/**
 * @api {get} /logRoute/user-logs/waterBody/:id Get User Logs by Water Body ID
 * @apiName getLogsByWaterBodyId
 * @apiGroup User Logs
 * 
 * @apiSuccess {Array} logs User logs for the given water body ID. 
 * 
 * @apiSuccessExample Successful GET Response
 * HTTP/1.1 200 OK
 * [
 *   {
 *     "username": "Leslie",
 *     "userId": 10,
 *     "log_id": 17,
 *     "waterBodyId": 1,
 *     "fishName": "red salmon",
 *     "fishCount": 2,
 *     "baitType": "worms",
 *     "timeSpent": 4,
 *     "timeOfDay": "9:00 am",
 *     "facilityName": "Cow Lake",
 *     "latitude": 47.135255996919575,
 *     "longitude": -118.15495300359936
 *   },
 *   {
 *     "username": "Bryan",
 *     "userId": 14,
 *     "log_id": 24,
 *     "waterBodyId": 1,
 *     "fishName": "pink salmon",
 *     "fishCount": 1,
 *     "baitType": "plastic",
 *     "timeSpent": 2,
 *     "timeOfDay": "6:30 am",
 *     "facilityName": "Cow Lake",
 *     "latitude": 47.135255996919575,
 *     "longitude": -118.15495300359936
 *   }
 * ]
 * 
 */
//#endregion

router.get("/user-logs/waterBody/:id", (req, res) => {
    logDb.getLogsByWaterBodyId(req.params.id)
        .then(result => {
            console.log("result in .then: ", result)
            if(result.length > 0) {
                res.status(200).json(result)
            } else {
                res.status(404).json({message: `Could not find any logs for that water body`})
            }
        })
        .catch(err => {
            res.status(500).json({error: `There was an error retrieving logs: ${err}`})
        })
})


//#region API DOCS for GET ALL USER LOGS
/**
 * @api {get} //logRoute/all-logs Get All User Logs 
 * @apiName getAllLogs
 * @apiGroup User Logs
 * 
 * @apiSuccess {Array} userLogs Returns an array of objects, where each object is a user log. 
 * @apiSuccessExample Successful GET Response
 *  [
 *   {
 *     "username": "Leslie",
 *     "userId": 10,
 *     "log_id": 17,
 *     "waterBodyId": 1,
 *     "fishName": "red salmon",
 *     "fishCount": 2,
 *     "baitType": "worms",
 *     "timeSpent": 4,
 *     "timeOfDay": "9:00 am",
 *     "facilityName": "Cow Lake",
 *     "latitude": 47.135255996919575,
 *     "longitude": -118.15495300359936
 *   },
 *   {
 *     "username": "Bryan",
 *     "userId": 14,
 *     "log_id": 24,
 *     "waterBodyId": 1,
 *     "fishName": "pink salmon",
 *     "fishCount": 1,
 *     "baitType": "plastic",
 *     "timeSpent": 2,
 *     "timeOfDay": "6:30 am",
 *     "facilityName": "Cow Lake",
 *     "latitude": 47.135255996919575,
 *     "longitude": -118.15495300359936
 *   }, 
 *  ...
 * ]
 * 
 */
//#endregion

router.get('/all-logs', (req, res) => {
    logDb.getAllLogs()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})

module.exports = router;
