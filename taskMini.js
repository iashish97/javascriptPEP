let tasks=[]
let nextId=1;

//add tasks 
const addTask=(title)=>{
    const task={
        id:nextId++,
        title,
        status:"pending"
    }
    tasks.push(task);
    console.log("Task added:",title)
}






