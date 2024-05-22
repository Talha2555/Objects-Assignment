var employee1 = {
    name: "Talha khan",
    department: "Engineering",
    role: "Engineer",
    contact: {
        mobileNo: 1244,
        email: "talhakhan@gmailcom",
    },
    skill: ["Javascript", "C++", "Next JS"]
};
var employee2 = {
    name: "Taha khan",
    department: "Technical Institute",
    role: "Manager",
    contact: {
        mobileNo: 455443,
        email: "tahakhan@gmail.com"
    }
};
console.log("employee 1 Details:", employee1);
console.log("calling the name property in employee 1 object", employee1.name);
console.log("employee 2 Details:", employee2);
console.log("calling the property in employee 2 object", employee2.name);
var car1 = {
    name: "Suzuki Mehran",
    model: 2019,
    capacity: 4,
    engine: {
        horsepower: 800
    },
    getHorsePower: function () {
        return this.engine.horsepower;
    }
};
console.log(car1);
console.log(car1.getHorsePower());
var car2 = {
    name: "Suzuki Alto",
    model: 2022,
    capacity: 4,
    engine: {
        horsepower: 600
    },
    getHorsePower: function () {
        return this.engine.horsepower;
    }
};
console.log(car2);
console.log(car2.getHorsePower());
var product = {
    name: "Polo tshirt",
    price: 1000,
    color: "white",
    inventory: {
        stock: 19,
        colorOptions: ["black", "white", "blue", "yellow", "grey"],
        changeColor: function (newColor) {
            //changing the color of property 
            this.color = newColor;
            //changing the price according to changed color
            if (newColor.toLowerCase() == "black") {
                //increase the price by 10% when black color is selected
                product.price *= 1.1;
            }
            else if (newColor.toLowerCase() == "blue") {
                product.price *= 0.95; //decrese the price by 5%for the blue shirt
            }
            else {
                //Reset the price for others colors
                product.price = 1000;
            }
        }
    }
};
console.log("Initial price :".concat(product.price, " Color ").concat(product.color));
product.inventory.changeColor("red");
console.log("After changing to red :the price is ".concat(product.price, " and color is ").concat(product.color));
product.inventory.changeColor("blue");
console.log("After changing to blue : ".concat(product.price, " ,and color ").concat(product.color));
product.inventory.changeColor("grey");
console.log(" After changing to grey ".concat(product.price, "and color ").concat(product.color));
