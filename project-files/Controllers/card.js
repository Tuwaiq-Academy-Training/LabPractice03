const course = require('../model/card');
const user = require('./user');
module.exports={
    index:(req,res)=>{
        //your code here
            card.find({}).populate(user).then((data)=>{
                res.json(data)
                   
            })
    },
    create:(req,res)=>{
        //your code here
        const newcard=new course(req.body);
        newcours.save().then(()=>res.json({"mes": "course created"}))
    },
    update:(req,res)=>{
        //your code here
        card.updateOne({_id : req.params.id},{name:req.body.name}).then(()=>{
            res.json({'mes' : "course updated"})
        })
    },
    delete:(req,res)=>{
        //your code here
        crad.deleteOne({_id : req.params.id},{name : req.body.name}).then(()=>{
            res.json({'mes' : "user deleted"})
        })
    },
}