const router = require('express').Router();
const waterBodies = require('./waterBodyModel.js');

router.get('/', (req, res) => {
    waterBodies.getAllWaterBodies()
        .then(bodies => {
            res.status(200).json(bodies)
        })
        .catch(err => {
            res.status(500).json({error: err})
        })
})

router.get('/:id', (req, res) => {
    const waterBodyId = req.params.id
    waterBodies.getWaterBodyById(waterBodyId)
        .then(bodies => {
            if(bodies > 0) {
                res.status(200).json(bodies)
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

router.get('/byName/:facilityName', (req, res) => {
    const facilityName = req.params.facilityName;
    console.log(req.params.facilityName)
    waterBodies.getWaterBodyByFacilityName(facilityName) 
    .then(bodies => {
        if(bodies.length > 0) {
            res.status(200).json(bodies)
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
