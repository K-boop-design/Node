const express = require('express')
const app = express()
const multer = require('multer')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/router')
const formSub = require('./controller/productController')

const fileStorage = multer.diskStorage({  
	destination: (req, file, cb) => {    
		cb(null, "images") 
 	},  
	filename: (req, file, cb) => {    
		cb(null, new Date().toISOString() + '-' + file.originalname);  	}
});

const fileFilter = (req, file, cb) => {
    if (
      file.mimetype === 'image/png' ||
      file.mimetype === 'image/jpg' ||
      file.mimetype === 'image/jpeg'
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(multer({storage: fileStorage, fileFilter:fileFilter}).single("image"));
app.use(router);

app.use('/post',formSub.formSubmit)

app.use((req,res,next)=>{
    res.status(404).send('Page not found')
})

app.listen(3000)