//part 1-----------Employee data--------------//
// 1. Design a type alias named Employee to represent an employee object with properties like 
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if 
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if 
// any
type Employee ={
    name:string,
    department :string,
    role:"Manager"|"Engineer"|"Intern",
    contact:{
        mobileNo :number,
        email:string,
    },

skill?:string[]
}
let employee1 :Employee ={
name:"Talha khan",
department:"Engineering",
role:"Engineer",
contact:{
    mobileNo:1244,
    email:"talhakhan@gmailcom",
},
skill:["Javascript","C++","Next JS"]
}
let employee2 :Employee ={
    name:"Taha khan",
    department:"Technical Institute",
    role:"Manager",
    contact:{
        mobileNo:455443,
        email:"tahakhan@gmail.com"
    }
}
console.log("employee 1 Details:",employee1);
console.log("calling the name property in employee 1 object",employee1.name);

console.log("employee 2 Details:",employee2);
console.log("calling the property in employee 2 object",employee2.name);

//part 2 ----------Car Details----------//
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named 
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
// engine's horsepower
 type Car ={
    name:string,
    model:number,
    capacity:number,
    engine:{
        horsepower:number
    },
  getHorsePower: ()=>number,
 }
 const car1 :Car ={
    name:"Suzuki Mehran",
    model:2019,
    capacity:4,
    engine:{
        horsepower:800
    },
    getHorsePower(){
return this.engine.horsepower
    }
}

 console.log(car1);
 
 console.log(car1.getHorsePower());
 
 const car2 :Car={
    name:"Suzuki Alto",
    model:2022,
    capacity:4,
    engine:{
        horsepower:600
    },
    getHorsePower(){
        return this.engine.horsepower
    }
 }
 console.log(car2);
 console.log(car2.getHorsePower());
 

 //Part 2 ---------Colorful T-Shirts----------//
// . Design a type alias named Product to represent a T-shirt object with properties like name
// (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object 
// should have two properties: 
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function 
// accepts a new color string as an argument. When called, it should: 
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g., 
// increase by 10% for red, decrease by 5% for blue).

type Product ={
    name:string,
    price:number,
    color:string,
    inventory:{
        stock:number,
        colorOptions?:string[],
        changeColor:(newColor:string)=>void
    },
   
}
let product :Product={
    name:"Polo tshirt",
    price:1000,
    color:"white",
    inventory:{
        stock:19,
        colorOptions:["black","white","blue","yellow","grey"],
    
   changeColor:function(newColor:string){
        //changing the color of property 
        this.color=newColor;
        //changing the price according to changed color
        if(newColor.toLowerCase()=="black"){
            //increase the price by 10% when black color is selected
        product.price*=1.1
        }
        else if (newColor.toLowerCase()=="blue"){
            product.price*=0.95//decrese the price by 5%for the blue shirt

        }else{
            //Reset the price for others colors
            product.price=1000
        }

}
    }

}

console.log(`Initial price :${product.price} Color ${product.color}`);
product.inventory.changeColor("red")
console.log(`After changing to red :the price is ${product.price} and color is ${product.color}`);
product.inventory.changeColor("blue")
console.log(`After changing to blue : ${product.price} ,and color ${product.color}`);
product.inventory.changeColor("grey")
console.log(` After changing to grey: ${product.price}, and color ${product.color}`);

