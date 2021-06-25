function highAndLow(numbers){
    var nums = numbers.split(" ").map(parseFloat)
      .filter(function(v){ return v===v });
    var max = nums[0];
    var min = nums[nums.length-1];
    for (let i = 0; i < nums.length; i++) 
    { 
      if (nums[i]>max){
        max = nums[i];
      }
      if (nums[i]<min){
        min = nums[i];
      }
    } 
    return max + " " + min;
  }

// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))