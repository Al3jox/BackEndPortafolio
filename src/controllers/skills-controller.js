const skillsCtr = {};
const skills = require('../models/skills-models');
const path = require('path');

const { default: mongoose } = require('mongoose');

// Petición POST - Crear Skill
skillsCtr.crear = async(req, res) => {

    const{title, description, categorySkill} = req.body;

    let rutaImg = '';
    if(req.file){
        rutaImg = path.join('/uploads', req.file.filename);
    }

    const newSkills = new skills({
        title,
        description,
        categorySkill,
        rutaImg
    });

    const respuesta = await newSkills.save();

    res.json({
        mensaje: 'Skill creada con éxito!',
        respuesta
    })

}


skillsCtr.listar

module.exports = skillsCtr;