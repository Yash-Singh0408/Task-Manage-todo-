const mongoose = require ('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'value must be provided'],
        trim:true,
        maxlength:[20 ,'Maximum values is 20 Character']
    },
    completed:{
        type:Boolean,
        default:false
    }
})


module.exports = mongoose.model('Task',TaskSchema);