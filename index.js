const elements = ['a', 'b', 'c', 'd'];

const GetNonRepeatedRandomIndex = (list, index) => {
  list.map((x, i) => (x = i)).filter((x) => x != index)[
    Math.floor(Math.random() * (list.length - 1))
  ];
};

console.log(GetNonRepeatedRandomIndex(elements, 1));
