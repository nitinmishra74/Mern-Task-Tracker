const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({//creating a schema that after coneect with db
   taskName:{
    type : String,
    required:true
   },
   isDone:{
    type : Boolean,
    required: true
   }
})

const TaskModel = mongoose.model('todos',TaskSchema);//here we are connecting our db to our schema
module.exports = TaskModel;