require("../src/db/mongoose");
const Tasks = require("../src/models/tasks");

const deleteTaskAndCount = async (id,completed)=>{
   const task = await Tasks.findByIdAndDelete(id);
  const count =  await Tasks.countDocuments({completed});
    return count;
}

deleteTaskAndCount('60c071c06c0054169b8dbb30',false).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})