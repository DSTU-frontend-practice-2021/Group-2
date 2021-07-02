function strangeMath(n, k){
let mas = [];
  for (var i = 0;i < n;i++){
    mas[i] = i+1;
  }
  mas.sort();
  for (var i = 0;i < n;i++){
    if (mas[i] == k)
  return i+1;
    }
}