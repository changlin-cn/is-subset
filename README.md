# isSubset
##  Determine if arr1 is a subset of arr2

# Usage
```javascript
// npm install is-a-subset --save

// *.js
const isSubset = require('is-a-subset').default;

console.log(isSubset([1,2],[2,1])) // => true
isSubset([{id:1},{id:2}],[{id:2},{id:1}],(a,b)=>a.id===b.id) // => true
```
