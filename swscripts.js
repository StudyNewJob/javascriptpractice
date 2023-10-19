function pizzaCheck(like) {
    if ((like == 'y') ||(like== 'Y') ) {
        document.write ("You like pizza!");
    } else if { (like == 'n') || (like == 'N')
        document.write ("You don't like pizza?");
    } else { document.write ("Invalid input");
           }
}
alert("Hello! Welcome to my Star Wars fan page!");
var name = prompt("What's your name?");
document.write("Welcome ", name );

var likeP = prompt("Do you like pizza? Type y or Y for yes or N or n for no.")

pizzaCheck(likeP);
