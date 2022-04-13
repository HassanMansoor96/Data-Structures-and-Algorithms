//2

//- So start by writing a simple example:(lets say our function is called charCount	
    charCount("aabbbccc")	//return {a:2, b:3, c:3}
 

//- Then ask more complex examples:
    "My phone number is 011 8234 2020"	//- should it count numbers, spaces, capital letters?

//- Explore examples with empty inputs:
    charCount("")				//- what should you do if the input is an empty string. return {}... null... 0.. error?

	
//- Explore examples with invalid input:
    charCount(100)				//- what should it return..??? should you convert it to a string..?

















//4
    function charCount(str) {
        //make this object to return at the end
        var obj = {};
        //loop over the string for each character
        for (var i = 0; i < str.length; i++){
            var char = str[i].toLowercase()
            //if char is letter/number AND is a key in object, add one to count.
            if(obj[char] > 0){
                obj[char]++;
            }
        
            //if char is letter/number AND NOT in object, add it to object and set count to 1.
            else{
                obj[char] = 1;
            };
        }
            //if char is not letter/number, don't do anything.
        //return object
        return obj;
    }