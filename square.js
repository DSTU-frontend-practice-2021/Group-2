function betweenSquares(number){
  for(let iteration = 0; iteration<1000000; iteration++)
    var bigger = iteration+1;
    var smaller = iteration;
    
    if (Math.pow(bigger,2) - Math.pow(smaller,2) === number) {
      return Math.pow(bigger,2)+"-"+Math.pow(smaller,2)
    }
  } 
}