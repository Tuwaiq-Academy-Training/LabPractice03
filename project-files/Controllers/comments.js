const course = require('../model/comments');
module.exports={
    index:(req,res)=>{
        //your code here
            comments.find({}).populat(user).then((data)=>{
                res.json(data)     
            })
    },
    create:(req,res)=>{
        //your code here
        const newcomments=new course(req.body);
        newcomments.save().then(()=>res.json({"mes": "course created"}))
    },
    update:(req,res)=>{
        //your code here
        comments.updateOne({_id : req.params.id},{name:req.body.name}).then(()=>{
            res.json({'mes' : "course updated"})
        })
    },
    delete:(req,res)=>{
        //your code here
        comments.deleteOne({_id : req.params.id},{name : req.body.name}).then(()=>{
            res.json({'mes' : "user deleted"})
        })
    }
}