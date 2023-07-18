const { Router } = require('express');
const multer = require('multer');
const path = require('path');

const router = Router();

// Configuración de Multer
// ===========================================

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './uploads');
      },
      filename: function (req, file, cb) {
        console.log(file);
        console.log(file.mimetype);
        // cb(null, `${Date.now()}-${req.body.title}-${req.body.description}-${file.originalname}`);
        cb(null, `${Date.now()}-${file.originalname}`);
      }
    }),
    fileFilter: function (req, file, cb) {
      if (!file.originalname.match(/\.(pdf)$/)) {
        return cb(
            new Error('Solo se permiten archivos PDF!'
            ));
      }
      cb(null, true);
    }
  });



router.post('/upload', (req, res, next) => {
  upload.single('file')(req, res, function (err) {
    if (err) {
      return res.status(400).send({
        success: false,
        error: err.message
      });
    }
    return res.status(200).send({
      success: true,
      error: 'File uploaded!'
    });
  });
});

// ===========================================

module.exports = router;