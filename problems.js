function divideByThree(num) {
    /* Returns the passed in number argument divided by three. */
    // Your code here
    let toMultiply = num;
    let result = num / 3;
    return result;
};

function averageOfTwo(num1, num2) {
    /* Returns the average of two numbers, num1 and num2. */
    // Your code here
    let value1 = num1;
    let value2 = num2;
    let result = (num1 + num2) / 2;
    return result;
};

function averageOfFour(num1, num2, num3, num4) {
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    // Your code here
    let result = (num1 + num2 + num3 + num4) / 4;
    return result;
};

function doubler(nums) {
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    // Your code here
    let newArray = [];
    for (let i = 0; i < nums.length; i++) {
        newArray.push(nums[i] * 2);
    }
    return newArray;
};

function combineArrays(arr1, arr2) {
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    // Your code here
    let resultArray = arr1.concat(arr2);

    return resultArray;

};

function wordWithinArray(word, arr) {
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    // Your code here
    let input = word;

    for (let i = 0; i < arr.length; i++) {
        if (input === arr[i]) {
            return true;
        }
    }
    return false;
};

function echo(str) {
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    // Your code here
    let strUp = str.toUpperCase();
    let strLow = str.toLowerCase();

    let echoing = strUp + " ... " + str + " ... " + strLow;
    return echoing;
};

function fizzBuzz(max) {
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
    // Your code here
    const result = [];
    for (let i = 0; i < max; i++) {
        const divisibleBy3 = i % 3 === 0;
        const divisibleBy5 = i % 5 === 0;

        if ((divisibleBy3 || divisibleBy5) && !(divisibleBy3 && divisibleBy5)) {
            result.push(i);
        }
    }
    return result;
};

function hello(name) {
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    // Your code here
    let greeting = "Hello, " + name;
    return greeting;
};

function goodbye(name) {
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    // Your code here
    return ("Bye, " + name);
};

function isFive(num) {
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    // Your code here
    if (num === 5) {
        return true;
    }
    return false;
};

function isOdd(num) {
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    // Your code here

    /*
    if (num % 2 === 1) {
        return true;
    }
    return false;
    */

    let boolResult = num % 2 === 1;
    return boolResult;
};

function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here
    searchString = searchString.toLowerCase();
    subString = subString.toLowerCase();
    return searchString.indexOf(subString) !== -1;
};

function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    // Your code here
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (char === "a" || char === "A") {
            count++;
        }
    }
    return count;
};

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}
