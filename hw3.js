/*1. create a directory called homework3
2. put some javascript in a file called homework3.js
3. The javascript file should contain the following:
-A function that takes at least three arguments and returns the result of some set of operations using those arguments - 5 points
-A function that takes no arguments and returns something - 5 points
-A function that takes arguments, does something but does not return anything - 6 points
-A function called fullName that takes as argument first name and last name and returns the full name of the person (first name concatenated with last name with a space in between) - 6 points
-A function that takes three strings and returns the string that is the longest.  - 6 points
   -Note that you can find out the length of a string by doing .length.  Example:
            const str = 'Hello';
            console.log(str.length); // this will print 6 to the console
-A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger - 6 points
-A function that takes three inputs and returns the first truethy value (example:  firstTruethy(0, '', 1); should return 1) - 6 points*/




const firstTruethy = function (val1, val2, val3){
  
    const truethy = val1 || val2 || val3;
    
    return truethy;
  
};
firstTruethy(" ",0,1);


const compare = function(int1,int2){
  
  if(int1 === int2) {
    
    return 0;
    
  }else if (int1 > int2){
    
    return 1;
    
  }else{
    
    return -1;
  }
  
};
compare(1,8);






const strLength = function (str1, str2, str3){
    if (str1.length > str2.length && str1.length > str3.length) {
      
      return str1;
      
    }else if (str2.length > str1.length && str2.length > str3.length){
      
      return str2;
      
      
    }else if (str3.length > str1.length && str3.length > str2.length){
      
      return str3;
    }else{
      
      return "arguments are equal";
    }
};
strLength("asdg", "as","asda");









const func = function(num1, num2, num3){
  
    const add = num1 + num2 + num3;
    
    const mult = num3 * num2 * num1;
    
    const mix = add / mult + num2;
    return mix;
};
  func(1,2,3);
  
  
const noArgument = function() {
  
   const add = 8 + 1;
   
   return add;
  
  
};
noArgument();

const noReturn = function(str1, str2){
  
    const word = str1 + str2;
  
};
noReturn("con","cat")

const fullName = function (firstName, lastName){
  
  const concat = firstName + " " + lastName;
  return concat;
};
fullName("Edvard","Smbatyan");




















