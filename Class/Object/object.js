var arr = [2, 34, 21, 45, 35,92, 39];

var obj = {
    id : 1,
    name : "pritesh",
    mobile : 1234567890,
    marks : arr,
    bday : {
        day : 12,
        month : "August",
        year : 1995
    }
};

var obj2 = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

//obj 1

// console.log(obj);
// console.log(obj.mobile);
// console.log(obj.marks);
// console.log(obj.marks[3]);
// console.log(obj.bday.day, "/" ,obj.bday.month, "/" ,obj.bday.year);

//obj 2

// console.log(obj2);
// console.log(obj2.address.geo.lat);
console.log(obj2.company.name);