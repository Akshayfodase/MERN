console.log("hello word")                       
   var a=10;
   var b=20;
var c=30;
console.log("addition of two number:"+c)

console.log("4**4")
const d=math.pow(4);
console.log(d);

var k=20;
var m=k*0.621371;

console.log("miles:"+m)
    c=25;
   var f=c*9/5+32;

   console.log("in ferniet:"+f);

var kg=100;
var pd=kg*2.20462;
console.log("in pound:"+pd);

var w=70;
var h=1.64;
   
var BMI =h*h;
console.log("BMI;"+BMI);
if(BMI<18.50{
   console.log("you are underweight");
}
else if (bmi){

}

default calculate_electricity_bill(units):
    if units <= 100:
        bill = 0
    elif units <= 200:
        bill = (units - 100) * 5
    else:
        bill = (100 * 5) + (units - 200) * 10
    return bill

# Accept the number of units from the user
try:
    units = int(input("Enter the number of units consumed: "))
    if units < 0:
        print("Units cannot be negative.")
    else:
        total_bill = calculate_electricity_bill(units)
        print(f"Total electricity bill: Rs {total _bill}")
except ValueError:
    print("Please enter a valid integer.")
