function betweenSquares(number){
  iteration = 0
  while(true){
    var bigger = iteration+1;
    var smaller = iteration;
    
    if (Math.pow(bigger,2) - Math.pow(smaller,2) == number) {
      return Math.pow(bigger,2)+"-"+Math.pow(smaller,2)
    }
    iteration+=1
  } 
}