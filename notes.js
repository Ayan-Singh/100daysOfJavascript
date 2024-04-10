Every method = Its an array method
             =>It execute function for each array element . 
             =>returns true if the function returns true for all element.
             =>method does not execute the function for empty elements 
             =>method does not change original array 
            ****IT RETURN TRUE OR FALSE********
    SYNTAX : array.every(function(currentValue, index, arr), thisValue)

REDUCE METHOD = Its an array method 
              =>It execute a reducer function for array element
              =>It return a single value (The function accumulated result)
              =>Does not change the original array 
              =>method does not execute the function for empty array elements.
              ******IT RETURNS A SINGLE VALUE*********

    SYNTAX : array.reduce(function(total*, currentValue*, currentIndex, arr), initialValue*)

SPREAD OPERATOR = The JavaScript spread operator (...) expands an 
                 iterable(like an array) into more elements . 

    SYNTAX : let variablename1 = [...value];

REVERSE METHOD = Its an array method 
               =>The reverse() method reverses the order of the elements 
                 in an array 
               =>The reverse() method overwrites the original array.

    SYNTAX : array.reverse() 
                *****RETURNS AN ARRAY*******

SPLIT FUNCTION = Its an String method
               =>splits a string into an array of substrings based on seperator given. 
               =>returns the new array.
               =>method does not change the original string.
     
    SYNTAX: string.split(separator, limit)  /\W/g

SORT METHOD = Its an array method 
                read here : 
               https://www.w3schools.com/js/js_array_sort.asp

FOREACH    = Its an array method 
          =>calls a function for each element in an array.
          *****IT DOESNOT RETURN ANYTHING*********
   SYNTAX: array.forEach(function(currentValue, index, arr), thisValue);