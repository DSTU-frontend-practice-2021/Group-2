console.log('App started')

 function highAndLow(foo){
   let arr=foo.split(' ')
    arr.sort()
  return arr[arr.length - 1]+" "+arr[0]
}

console.log(highAndLow("6 2 3 4 5"))
console.log(highAndLow("1 2 -3 4 5"))
console.log(highAndLow("1 9 3 4 -5"))