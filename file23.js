numbers=[5,3,6,1]


//loop through all indexes
numbers.forEach((number)=>{
    console.log(number)
})


// used to transfrom and store in new array
const newArray =numbers.map((number)=>{
    return number+1
})
console.log(newArray)


//filtering according to the conditions {output will be new array filtered but not modified}
const newArray1=numbers.filter((number)=>{
    return number%2===0
})
console.log(newArray1)


//
const result=numbers.find((number)=>{
    return number>3
})
console.log(result)


//
const result2=numbers.reduce((sum,number)=>{
    return sum+number
},0)
console.log(result2)


//true or false if any one element matches condition
const result3=numbers.some((number)=>{
    return number<0
})
console.log(result3)


let marks = [78, 50, 90, 20];

// SOME: checks if at least one student failed
const result4 = marks.some((mark) => {
    return mark < 40;
});

if (result4) {
    console.log("Reappear");
} else {
    console.log("Successfully saved rupees 500");
}


// EVERY:checks if all students passed
const result5 = marks.every((mark) => {
    return mark > 40;
});

if (result5) {
    console.log("Btech deg unlocked");
} else {
    console.log("Not Avengers:Doomsday");
}

