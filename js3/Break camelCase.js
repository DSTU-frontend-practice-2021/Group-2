// complete the function
function solution(string) {
    let index = [];
    for(let i = 0; i < string.length; i++){
      if(string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90){
        index.push(i);
      }
    }
    let line = "";
    
    for(let i = 0; i < string.length; i++){
      let cond = false;
      for(let j = 0; j < index.length; j++){
        if(index[j] === i){
          cond = true;
          break;
        }
      }
      
      if(cond){
        line = line + " " + string[i];
      }
      else{
        line = line + string[i];
      }
    }
    return line;
  }
  