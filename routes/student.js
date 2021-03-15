const express = require('express')
const router = express.Router()
const Student = require('../models/student')



router.get('/', async(req,res) => {
    try{
           const students = await Student.find()
           res.json(students)
    }catch(err){
        res.send('Error ' + err)
    }
    // res.json("its working");
})

router.get('/:id', async(req,res) => {
    try{
           const student = await Student.findById(req.params.id)
           res.json(student)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    console.log(req.body)
    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        marks: req.body.marks
    })

    try{
        const save =  await student.save() 
        res.json(save);
    }catch(err){
        res.json({message: err});
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const student = await Student.findById(req.params.id) 
        student.Marks = req.body.Marks
        const s = await alien.save()
        res.json(s)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router