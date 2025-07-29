# HW 32. findValuesByKey

Write a function findValuesByKey(obj, targetKey) that:

Takes an arbitrary nested object obj. Returns an array of all values that match the key targetKey (the key can appear at any level of nesting, and multiple times).
```javascript
const data = {
id: 1,
name: "root",
meta: {
id: 2,
parent: {
id: 3,
name: "leaf",
},
},
array: [
{ id: 4 },
{ name: "node", children: [{ id: 5 }] },
],
};

findValuesByKey(data, "id");
// ➜ [1, 2, 3, 4, 5]
```

