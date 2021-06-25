function strangeMath(n, k)
{
	let arr = [];
	for(var i = 0; i<=n; i++)
		{
			arr[i] = i;
		}
	return (arr.sort().indexOf(k));
}

console.log(strangeMath(11,2));
console.log(strangeMath(15,5));
console.log(strangeMath(15,15));