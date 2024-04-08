//1)= Write a function arraysAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal(i.e. contain the same elements in the same order), false otherwise 

//Note: The function should return false if the arrays have different length 
//the function should compare each element of arr1 with arr2 .

function arraysAreEqual(arr1,arr2){
    if(arr1.length !==arr2.length){
        return false ;
    }
    return arr1.every((curVal ,index) => curVal === arr2[index])

}
console.log(arraysAreEqual([1,2,3],[1,3,2]));


//2)-------------------------------------------------------------------------


//Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

function calculateAverage(arr){
    let sum = 0;
    arr.map((num) => {             
    // let total = arr.reduce((accu,curElem) => accum + curElem,0) 
    //return total/arr.length
        sum+=num;
    })
    let average = sum/arr.length
    return average;
}
console.log(calculateAverage([1,2,3,4,5]));

//3)------------------------------------------------------------------------


//factorial finder 
//write a function that take non negative integer num as input and returns its factorial.

function factorial(num){
    let fact =1
    if(num<0){
        return false;
    }
    for(let i=1;i<=num;i++){
     fact*=i;    
    }
    return fact ;
}

console.log(factorial(5));


//4)-------------------------------------------------------------------------
//Write a function findmax that takes an array of numbers as input and returns the maximum number in the array.

function findmax(arr){
    let max = 0;
    arr.map((currVal) =>{
        if(currVal>max){
            max=currVal
        }
    } )
    return max;
}
console.log(findmax([1,2,3,4,5,8,9,6]));

//also can use max method 
const findlarge = (arr) =>{
    return Math.max(...arr)
}
console.log(findlarge([1,2,3,4,5,8,9,6]));


//5)------------------------------------------------------------------------

//Write a function to determine whether a given string is a palindrom or not - 
//input may contain letter digit spaces punctuation and special character 
//function should be case insensitive 

function isPalindrome(str){
    str = str.trim().replace(/\W/g, "").toLowerCase(); //w-word replace
    revStr=str.split("").reverse().join(""); //****** */
    return str ===revStr ?true : false;
}
console.log(isPalindrome(" @@@$$$raceCar   "))

//6)----------------------------------------------------------------------

//Write a function to sort an array of numbers in an ascending order..
//not allowed to use sort method 
//original array should not changed 
//sort method doesnt work well with numbers 
function sortAscending(arr){
    return arr.sort((a,b)=>a-b);
}
console.log(sortAscending([1,3,4,5,10,23,45]));

//7)----------------------------------------------------------------------

//write a function that check triangle 

function triangle(a,b,c){
    if(a===b && b===c) return "equilateral";
    if(a===b || b===c || a===c) return "isosceles" ;
    return "scalene" ;
}
console.log(triangle(5,5,5))

//8)----------------------------------------------------------------------
//Write a function called countChar that takes two parameter : a string and a character and returns the times the specified character appears 
//function should be case in-sensitive - handles both upper and lower chase character
//character parameter can be any ascii character 

function countChar(str,char){
    str = str.trim().toLowerCase();
    char = char.toLowerCase();

    totalCount = str.split("").reduce((accum,currChar) => {
        if(currChar === char){
            accum++
        }
        return accum ;
    },0)
    return totalCount ;
}
console.log(countChar("poorvipagluhai","p"))

//9)-------------------------------------------------------------------------
// write a function to find longest word that takes a string as a input and returns the longest word in the string . If there are multiple longest word , return the first word encountered .

//Constrain

//? The input string may contain alphabetic characters , digits , spaces , and punctuation 
//the input string is non empty 
// the input string may contain multiple word seperated by spaces 

//note 
//if the input string is empty or contain only whitespaces the function should return an false 
// the function should ignore leading and trailing whitespace when determining the longest word 

function findLongestWord(str){
    str = str.trim();
    if(str.length===0){
        return false
    }
    str=str.split(/\s+/g);
    return str.reduce((accum,currVal) =>{
        if(currVal.length>accum.length){
            accum = currVal ;
        }
        return accum ; 
    },"")
}
console.log(findLongestWord("Ayan is a      gooooood boooooooooooy"));

//10)-----------------------------------------------------------------------
//Generate hashtag
//You are required to implement a function generateHash that generates a hash tag from given input string. The hash tag should be constructed as follows : 

//The input string should be converted to a hash tag format , where each word is capitalized and concatenated together without spaces. 
//if the length of input string is greater than 280 character or if the input string is empty orcontains only whitespaces the function should return false 
//Otherwise the function should return the generated hash tag prefixed with #


function generateHash(str){
    if(str.length > 280 || str.trim().length === 0){
        return false ;    
    }

    str = str.trim().split(" ");   //foreach me value return nhi kr skte 
    str = str.map((curElem) => 
        curElem.replace(curElem[0], curElem[0].toUpperCase() ) 
    );
    str=`#${str.join("")}`; 


    return str ;
    
}
console.log(generateHash("my name is ayan Singh "));


function generateHash(str){
    if(str.length > 280 || str.trim().length === 0){
        return false ;    
    }

    str = str.trim().split(" ");   //foreach me value return nhi kr skte 
    str = str.map((curElem) => 
        // curElem.replace(curElem[0], curElem[0].toUpperCase() ) 
        curElem.charAt(0).toUpperCase() + curElem.slice(1)
    );
    str=`#${str.join("")}`;


    return str ;
    
}
console.log(generateHash("my name is ayan Singh")) ; 

//11)---------------------------------------------------------------------------------------------------------------------------------------
//Write a function that takes number as a input and returns the sum of its digit - input must be positive - 
function summation(num){
    if(num<0){
        return "Invalid Input"
    }
    let arr = Array.from(String(num),Number)
    return arr.reduce((accum,curVal)=> accum += curVal);
}
console.log(summation(125345));