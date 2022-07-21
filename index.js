const elements = ['a', 'b', 'c', 'd'];

const GetNonRepeatedRandomIndex = (list, index) => {
  return list.map((_x, i) => (_x = i)).filter((_x) => _x != index)[
    Math.floor(Math.random() * (list.length - 1))
  ];
};


setTimeout
console.log(GetNonRepeatedRandomIndex(elements, 0));
//test
