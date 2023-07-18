const {Router} = require('express');
const router = Router();
const skillsCtr = require('../controllers/skills-controller');

router.post('/crearSkills', skillsCtr.crear);

module.exports = router;