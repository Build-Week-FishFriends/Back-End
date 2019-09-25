const router = require('express').Router();
const waterBodies = require('./waterBodyModel.js');

//#region API DOCS FOR GET ALL WATER BODIES
/**
 * @api {get} /waterBodies/ Get All Water Bodies
 * @apiName getAllWaterBodies
 * @apiGroup Water Bodies
 *  
 * */
//#endregion

router.get('/', (req, res) => { 
    waterBodies.getAllWaterBodies()
        .then(bodies => {
            res.status(200).json(bodies)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})


//#region API DOCS FOR GET WATER BY ID
/** 
 * @api {get} /waterBodies/:id Get Water Body by ID
 * @apiName getWaterBodyById
 * @apiGroup Water Bodies
 *  
 * @apiParam {Number} id Water Body ID
 * 
 * @apiSuccess {Number} id Water Body ID
 * @apiSuccess {String} facilityName Water Body Name
 * @apiSuccess {Number} latitude Latitude
 * @apiSuccess {Number} longitude Longitude
 * @apiSuccess {String} directions Directions
 * 
 * @apiSuccessExample Successful Response Ex: 
 * HTTP/1.1 200 OK
 * 
 * {
 *   "id": 1,
 *    "facilityName": "Cow Lake",
 *    "latitude": 47.135255996919575,
 *    "longitude": -118.15495300359936,
 *    "directions": "From Ritzville take Wellsandt Rd to east for 11.8 miles to Cow Lake Rd.  Right on Cow Lake Rd (south) for 1.6 miles."
 * }
 * 
 * @apiError waterBodyNotFound Could not find a facility with that id: id
 * 
 * @apiErrorExample Water Body Not Found
 * HTTP/1.1 404 Not Found
 * { 
 *   "message": "Could not find a facility with that id: 1231"
 * }
 * 
 * */ 
//#endregion

router.get('/:id', (req, res) => {
    const waterBodyId = req.params.id
    waterBodies.getWaterBodyById(waterBodyId)
        .then(bodies => {
            if(bodies.length > 0) {
                res.status(200).json(bodies[0])
            } else {
                res.status(404).json({
                    message: `Could not find a facility with that id: ${waterBodyId}`
                })
            }   
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})


//#region API DOCS FOR GET WATER BY WATER BODY NAME
/**
 * @api {get} /waterBodies/byName/:facilityName Get Water Body by Name
 * @apiName getWaterBodyByFacilityName
 * @apiGroup Water Bodies
 *  
 * @apiParam {String} facilityName Water Body Name (e.g., "Cow Lake")
 * 
 * @apiSuccess {Number} id Water Body ID
 * @apiSuccess {String} facilityName Water Body Name
 * @apiSuccess {Number} latitude Latitude
 * @apiSuccess {Number} longitude Longitude
 * @apiSuccess {String} directions Directions
 * 
 * @apiSuccessExample Successful Response Ex: 
 * HTTP/1.1 200 OK
 * 
 * {
 *   "id": 1,
 *    "facilityName": "Cow Lake",
 *    "latitude": 47.135255996919575,
 *    "longitude": -118.15495300359936,
 *    "directions": "From Ritzville take Wellsandt Rd to east for 11.8 miles to Cow Lake Rd.  Right on Cow Lake Rd (south) for 1.6 miles."
 * }
 * 
 * @apiError waterBodyNotFound Could not find a facility with that name: name
 * 
 * @apiErrorExample Error Response Ex:
 * HTTP/1.1 404 Not Found
 * {
 *   "message": "Could not find a facility with that name: Cow Lake2"
 * }
 * */
//#endregion

router.get('/byName/:facilityName', (req, res) => {
    const facilityName = req.params.facilityName;
    console.log(req.params.facilityName)
    waterBodies.getWaterBodyByFacilityName(facilityName) 
    .then(bodies => {
        if(bodies.length > 0) {
            res.status(200).json(bodies[0])
        } else {
            res.status(404).json({
                message: `Could not find a facility with that name: ${facilityName}`
            })
        }   
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

module.exports = router;
