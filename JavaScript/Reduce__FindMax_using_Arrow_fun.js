const arr = [5,1,3,2,6]
console.log (arr.reduce((acc,curr)  => curr > acc ? curr: acc , 0));
// the question mark "?" here means if else conditon here colon ":" else