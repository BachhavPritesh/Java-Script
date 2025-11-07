var arr = [2,5,3,7,8];

var obj = {v1:"a", v2: "b", v3: arr};

var arr2 = [{v4:"b"}, {v5:"t"}];

var v8 = {v9:"done"}

var obj2 = {v6: "name", v7: [1,2,v8]}

console.log(obj2.v7[2].v9);