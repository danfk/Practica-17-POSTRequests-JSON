const express = require('express');
let router = express.Router();
router.get('/student', function (req, res) {
    let t = req.params.id;
    res.render('student');
});

router.post('/addStudent', function (req, res) {
    res.render('displayData',{ nombre: req.body.nombre,
                                edad: req.body.edad,
                            nss: req.body.nss,
                        tipoSangre: req.body.tipoSangre});
});

router.post('/personJson', express.json({type:'*/*'}), function (req, res) {
    console.log(`nombre: ${req.body.nombre}
                         ${req.body.apellido}`)
});

router.get('/testJson', function (req, res) {
    res.render('testJason');
});

module.exports = router;