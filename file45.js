function getStudentInfo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const userObj={
                name:"Alan",
                age:21,
                email:"alanmak@gmail.com"
            }
            resolve(userObj)
        },2000)
    })
}

function displayInfo({name}){
    console.log(name)
}

async function main(){
    const result =getStudentInfo()
    console.log(result)
    console.log("Program complete successfully")
}
main()
displayInfo()


//getstudentinfo shou;d return object name,email and age