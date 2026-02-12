// const products=["product1","product2","product3"]


const products=[
    {
        id:1,
        name:"product1",
        des:"t1"
    },{
        id:2,
        name:"product2",
        des:"t2"
    },{
        id:3,
        name:"product3",
        des:"t3"
    }]
let cart=[]  //const for push but why???

// // products.forEach((product)=>console.log(product))
// products.forEach((product)=>{
//     product.quantity=1
//     product.total=product.price * product.quantity
//     // cart.push(product)
//     cart=[...cart,product]
// })
// console.log(cart)

products.forEach((product)=>{
    const obj={
        ...product,
        quantity:1
    }
    cart=[...cart,obj]
})

console.log(cart)



