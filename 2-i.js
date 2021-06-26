function highAndLow(numbers)
{
  let nums = numbers.split(" ").map(Number).filter(function(v){ return v===v });
  return Math.max(...nums) + " " + Math.min(...nums);
}