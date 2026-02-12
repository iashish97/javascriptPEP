const products=[
    {
        id:1,
        name:"product1",
        des:"t1",
        price:100,
        category:"Laptop"
    },{
        id:2,
        name:"product2",
        des:"t2",
        price:120,
        category:"Desktop"
    },{
        id:3,
        name:"product3",
        des:"t3",
        price:130,
        category:"Laptop"
    },
        {
        id:4,
        name:"product4",
        des:"t4",
        price:140,
        category:"Laptop"
    },{
        id:5,
        name:"product5",
        des:"t5",
        price:150,
        category:"Desktop"
    },{
        id:6,
        name:"product6",
        des:"t6",
        price:160,
        category:"Laptop"
    }
]
let category="id"
let text=1
const resultArray=products.filter((product)=>{
    return product.id==text
})



console.log(resultArray)


