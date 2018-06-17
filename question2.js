/*
Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 
For s = "4[ab]", the output should be decodeString(s) = "abababab" 
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

const decodeString = s => {
  let stack = s.split('');
  let decoded = '';

  while (stack.length) {
    let popped = stack.pop();

    //if it's a letter, append to decoded
    if (isNaN(popped) && popped !== "]" && popped !== "[") {
      decoded += popped;
    }
    else {
      decoded += decoded.repeat(popped - 1);
    }
  }
  return decoded.split('').reverse().join('');
}

decodeString('2[b3[a]]');
