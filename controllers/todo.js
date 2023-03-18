let arr=[
   {
       task:"task 1",
       id:"1"
   }, {
       task:"task 2",
       id:"2"
   }, {
       task:"task 3",
       id:"3"
   }
]


const getTodo=(req,res)=>{
   res.status(200).json({
       message:"success",
       total:arr.length,
       todo:arr
   })
}


const addTodo=(req,res)=>{
   const todo={
       task:req.body.task,
       id:arr.length+1
   };
   arr.push(todo);
   res.status(200).json({
       message:"success",
       total:arr.length,
       todo:arr
   })
}
const deleteTodo=(req, res) => {
    arr.splice(req.body.id,1);
    res.status(200).json({
        message: "list is deleted",
        todo: arr
    });
  }

export {getTodo,addTodo,deleteTodo}