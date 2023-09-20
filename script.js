class Palindrome{
    constructor(str){
        this.str = str
    }

    checkPalindrome(str){
        //define the parameter
        this.str = str;

        //check if parameter is a string
        if (typeof(str) != 'string'){
            return "Enter strings only"
        } else{

        // convert the parameter to an array
        let arrayWord = str.split(" ");
        let newArray = []

        //loop through the array to compare each element as a palindrome
        for (let index = 0; index < arrayWord.length; index++) {
            let element = arrayWord[index];
            let reverse = element.split("").reverse().join("");

            //push any item that is a palindrome into the new array
            if(element === reverse){newArray.push(element)}    
        }

        // return only the words that return as palindrome
        if(newArray != ""){
            return newArray.join(" ");
        } else {

        // return false if there is no palindrome
            return "Not a palindrome";
        }}
    }
}

const checker = new Palindrome;
// const result = checker.checkPalindrome('1230321');
// const result = checker.checkPalindrome('1230321 09234 0124210');
// const result = checker.checkPalindrome('09234');
// const result = checker.checkPalindrome('09234 0124210');
// const result = checker.checkPalindrome('abcd5dcba 1230321 09234 0124210');
// const result = checker.checkPalindrome('A man, a plan, a canal – Panama');
// const result = checker.checkPalindrome('123454321 6789 abdba');
// const result = checker.checkPalindrome('alpha');
// const result = checker.checkPalindrome('peep poop pap');
// const result = checker.checkPalindrome('peter and john');

console.log(result);