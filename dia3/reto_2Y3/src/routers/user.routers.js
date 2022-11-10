const {Router} = require('express');
const router = Router();
const usersCtrl = require('../controller/user.controller');

router.get('/profesional',usersCtrl.getprofesional);
router.post('/profesional',usersCtrl.postProfesional);
router.put('/profesional',usersCtrl.putProfesional);
router.delete('/profesional',usersCtrl.deleteProfesional);
module.exports = router;