const myComputer={
    // key : value 
    brand:"Mac",
    model:"MacbookPro",
    color:"Dark Gary",
    cpu:"M2"
    // i am done with three properties
}
// value of brand with dot
var x= myComputer.brand;
//what is the value of x?
// i want to print x so i can see the avlue of it
console.log(x);
console.log(myComputer.model);
// i want to access two properties value with []
var y=myComputer["color"];
// for testing i will print y so i can see the value
console.log("this color:"+y);
console.log("this is the cpu:"+myComputer["cpu"]);
//updated the code