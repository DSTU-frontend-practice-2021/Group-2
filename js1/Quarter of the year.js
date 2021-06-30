const quarterOf = (month) => {
    let m = month % 3;
      if(m > 0){
        return (month - m) / 3 + 1;
      }
    else{
      return month / 3;
    }
    }