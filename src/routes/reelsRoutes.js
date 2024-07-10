const express = require('express')
const { fetchreels, addreel, addcomment, handlelike, updatecomment, deletecomment, deletereel, updatereel } = require('../controllers/reelsController')
const path = require('path')
const fs = require('fs')

const routerReels = express()
const multer = require('multer')
const { createReelValidation, updateReelValidation } = require('../helper/validation')
const authentication = require('../middleware/authentication')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dirPath = path.join(__dirname, '../public/reels');

        // Check if the directory exists, if not, create it
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        cb(null, dirPath);

    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name)

    }
})


const upload = multer({ storage: storage })

//only admin routes
routerReels.post('/addreel', upload.single('reel'), createReelValidation, addreel)
routerReels.put('/updatereel', upload.single('reel'), updateReelValidation, updatereel)
routerReels.delete('/deletereel', deletereel)


routerReels.get('/fetchreels', authentication, fetchreels)
routerReels.post('/addcomment', authentication, addcomment)
routerReels.post('/handlelike', authentication, handlelike)
routerReels.put('/updatecomment', authentication, updatecomment)
routerReels.delete('/deletecomment', authentication, deletecomment)



module.exports = routerReels