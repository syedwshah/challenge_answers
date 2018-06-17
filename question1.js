/*
Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
*/

const sortByString = (s,t) => {
  let s_object = new Object();
  let output = new String();
  //Create a dictionary using s
  s.split('').map(x => {
    if (!s_object[x]) {
      s_object[x] = 0;
    }
    s_object[x]++;
  });

  //Traverse t and append to the output values where t and s intersect 
  t.split('').map(x => {
    if (s_object[x]){
      output += x.repeat(s_object[x]);
    } 
  });
  return output;
}

sortByString("weather", "therapyw"); //expecting "theeraw"
sortByString("good", 'odg'); //expecting "oodg"
