function to_nato(words) {
	let  nato = [
    "Alfa",
    "Bravo",
    "Charlie",
    "Delta",
    "Echo",
    "Foxtrot",
    "Golf",
    "Hotel",
    "India",
    "Juliett",
    "Kilo",
    "Lima",
    "Mike",
    "November",
    "Oscar",
    "Papa",
    "Quebec",
    "Romeo",
    "Sierra",
    "Tango",
    "Uniform",
    "Victor",
    "Whiskey",
    "Xray",
    "Yankee",
    "Zulu"
  ];
  
  let c = words[0].charCodeAt(0);
  
  if(c >= 97){
    c -= 97;
  }
  else{
    c -= 65;
  }
  
  let line = nato[c];
  
  
  for(let i = 1; i < words.length; i++){
    let code = words[i].charCodeAt(0);
    if(code >= 65 && code <= 90){
      line = line + " " + String(nato[code - 65]);
    }
    else if(code >= 97 && code <= 122){
      line = line + " " + String(nato[code - 97]);
    }
    else if(code == 33 || code == 44 || code == 46 || code == 63){
      line = line + " " + String.fromCharCode(code);
    }
  }
  
  return line;
}