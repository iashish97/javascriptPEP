// let score=90
// let result
// if(score>50){
//     result="Pass"
// }
// else{
//     result="Fail"
// }
// console.log(result)




// let score=90
// let result=score>50?"Pass":"Fail"
// console.log(result)



//used for default values
// let score
// let result=score || 30
// console.log(result)

let score = 80;

switch (true) {
    case (score > 50 && score <= 60):
        console.log("Grade C");
        break;

    case (score > 60 && score <= 70):
        console.log("Grade B");
        break;

    case (score > 70 && score <= 85):
        console.log("Grade B+");
        break;

    case (score > 85 && score <= 95):
        console.log("Grade A");
        break;

    case (score > 95 && score <= 100):
        console.log("Grade A+");
        break;

    default:
        console.log("Failed");
}
// switch case checks for both value and type 


