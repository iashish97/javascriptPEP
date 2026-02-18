function f1(x){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(x%2===0){
                resolve()
            }else{
                reject("odd numbers not allowed")
            }
        },3000)
    })
}

async function main(){
    let num =Math.round(Math.random()*10)
    try{
        const result=await f1(num)
    }
}