const router = require('express').Router()
const courseController =require('../Controller/course');
const userController =require('../Controller/user');
const cardController =require('../Controller/card');
const commentsController =require('../Controller/comments');

//** course
//insert-create
router.post("/course/create",courseController.create);
//find
router.get("/courses",courseController.index);
//update
router.put("/course/update/",courseController.update);
//Delete
router.delete("/course/delete/",courseController.delete);

//** card
//insert-create
router.post("/card/create",cardController.create);
//find
router.get("/card",cardController.index);
//update
router.put("/card/update/:id",cardController.update);
//Delete
router.delete("/card/delete/:id",cardController.delete);

//** user
//insert-create
router.post("/user/create",userController.create);
//find
router.get("/user",userController.index);
//update
router.put("/user/update/:name",userController.update);
//Delete
router.delete("/user/delete/:id",userController.delete);

//** comment
//insert-create
router.post("/comments/create",commentsController.create);
//find
router.get("/comments",commentsController.index);
//update
router.put("/comments/update/:id",commentsController.update);
//Delete
router.delete("/comments/delete/:id",commentsController.Delete);

module.exports = router;