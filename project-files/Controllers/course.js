const course = require('../model/course')
module.exports={
    index:(req,res)=>{
        //your code here
        
            course.find({}).then((data)=>{
                res.json(data)
                   
            })
    },
    create:(req,res)=>{
        //your code here
        const newcours=new course(req.body);
        newcours.save().then(()=>res.json({"mes": "course created"}))
    },
    update:(req,res)=>{
        //your code here
        course.updateOne({_id : req.params.id},{name:req.body.name}).then(()=>{
            res.json({'mes' : "course updated"})
        })
    },
    delete:(req,res)=>{
        //your code here
        course.deleteOne({_id : req.params.id},{name : req.body.name}).then(()=>{
            res.json({'mes' : "user deleted"})
        })
    }
}