// write a function to find longest word that takes a string as a input and returns the longest word in the string . If there are multiple longest word , return the first word encountered .

//Constrain

//? The input string may contain alphabetic characters , digits , spaces , and punctuation 
//the input string is non empty 
// the input string may contain multiple word seperated by spaces 

//note 
//if the input string is empty or contain only whitespaces the function should return an false 
// the function should ignore leading and trailing whitespace when determining the longest word 

// function findLongestWord(str){
//     if(str.trim().length===0){
//         return false ;
//     }
//     let str1 = str.trim().split(/\s+/);

    //*********** */

    // let longestWord = "";
    // for(let i of str1){
    //     if(i.length>longestWord.length){
    //         longestWord=i;
    //     }

    // }
    // return longestWord ; 


    //****OR     */


    // str1=str1.sort((a,b) => a.length-b.length) 
    // return str1.at(-1);                         //sort on basis of unicode values //capital first then alphabet 


    //**************OR*******

    // return str1.reduce((accum,curWord)=>(curWord.length > accum.length ? curWord :accum),"" );

    
// }
// console.log(findLongestWord(" Ayaan is Very Goooood boy and heee "));



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//HASHTAG GENERATOR -----

//You are required to implement a function generateHash that generates a hash tag from given input string. The hash tag should be constructed as follows : 

//The input string should be converted to a hash tag format , where each word is capitalized and concatenated together without spaces. 
//if the length of input string is greater than 280 character or if the input string is empty orcontains only whitespaces the function should return false 
//Otherwise the function should return the generated hash tag prefixed with #

// function generateHash(str){
//     if(str.length > 280 || str.trim().length === 0){
//         return false ;    
//     }

//     str = str.trim().split(" ");   //foreach me value return nhi kr skte 
//     str = str.map((curElem) => 
//         curElem.replace(curElem[0], curElem[0].toUpperCase() ) 
//     );
//     str=`#${str.join("")}`;


//     return str ;
    
// }
// console.log(generateHash("my name is ayan Singh "));


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