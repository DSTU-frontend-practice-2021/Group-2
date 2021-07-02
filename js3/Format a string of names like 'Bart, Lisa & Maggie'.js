function list(names){
  
  
    if(names.length > 0){
      let line = names[0].name;
    
      for(var i = 1; i < names.length - 2; i++){
        line = line + ", " + names[i].name;
      }
    
      if(names.length > 2){
        line = line + ", " + names[names.length - 2].name + " & " + names[names.length - 1].name;
      }
      else if (names.length > 1) {
        line = line + " & " + names[names.length - 1].name;
      }
      return line;
    }
    return "";
  }
