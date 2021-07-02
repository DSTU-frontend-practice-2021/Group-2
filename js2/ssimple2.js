const findSquares = num => {
  for(var i = 1; i < 1000000;i++){
    let bigger = (i+1)*(i+1);
    let smaller = i*i;
    if(bigger-smaller == num){
      return bigger + "-" + smaller;
    }
  }
};