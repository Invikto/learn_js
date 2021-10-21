# Homework #2

1. Implement a function called `pinCodeGenerator`. This function should take one argument called length and return a randomly generated pin code of a given length.

   For example,  `pinCodeGenerator(5) → 73473`

2. Create a function which checks whether a phone number is valid or not.

   NOTE: You don’t need to test your function with all possible phone numbers, just check if the function will work correctly with the following inputs.

        validatePhoneNymber(067 734 4343) → true
        validatePhoneNymber(094 643 7432) → true
        validatePhoneNymber(083 jfvj 4554) → false
        validatePhoneNymber(Anton0938 884) → false
        validatePhoneNymber(0437348348) → true

3. There is an array with the most popular last names, but the first two elements don’t look like valid last names. Delete the first two elements of the array.
        
        const arr =  ["НПП Прізвище Кіл-ть Приблизно","______________________в_ базіпо_Україні", "0-rt-rgfr", "8484fjdfkf", "МЕЛЬНИК","ШЕВЧЕНКО","БОЙКО","КОВАЛЕНКО","БОНДАРЕНКО","ТКАЧЕНКО","КОВАЛЬЧУК","КРАВЧЕНКО","ОЛІЙНИК"]

4. There is a function which counts all vowels in a given string, but for some reason it dosn’t work as expected. Find out the problem and fix it.
        
        const vovelsCounter = (str) => {
            const vovels = ['a', 'e', 'i', 'o', 'u']
            let counter = 0
            for(letter of str){
             if(vovels.includes(letter)){
                 counter = counter + 1
              }
            }
            return counter
        }

        vovelsCounter('The current directory is AD-123')
        expected output → 8
        actual output → 7
