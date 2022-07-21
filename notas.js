//v1
const GetNonRepeatedRandomIndex = (list, index) => {
  const indexes = Array(list.length).fill(0);

  const indexesClone = indexes.map((x, i) => (x = i));

  const indexesCloneFiltered = indexesClone.filter((x) => x != index);

  const randomIndex = Math.floor(Math.random() * indexesCloneFiltered.length);

  return indexesCloneFiltered[randomIndex];
};

//v2
const GetNonRepeatedRandomIndex = (list, index) => {
  const indexesClone = list.map((x, i) => (x = i));

  const indexesCloneFiltered = indexesClone.filter((x) => x != index);

  const randomIndex = Math.floor(Math.random() * indexesCloneFiltered.length);

  return indexesCloneFiltered[randomIndex];
};

//v3
const GetNonRepeatedRandomIndex = (list, index) => {
  const indexesClone = list.map((x, i) => (x = i)).filter((x) => x != index);

  const randomIndex = Math.floor(Math.random() * indexesClone.length);

  return indexesClone[randomIndex];
};
//v3-alternative(I do not think it makes sense to define a function that I will not call again since it is declared inside the body of this function.)
const GetNonRepeatedRandomIndex = (list, index) => {
  const indexesClone = list.map((x, i) => (x = i)).filter((x) => x != index);

  const getRandomIndex = (list) =>
    Math.floor(Math.random() * indexesClone.length);

  return indexesClone[getRandomIndex(indexesClone)];
};

//v4
const GetNonRepeatedRandomIndex = (list, index) => {
  const indexesClone = list.map((x, i) => (x = i)).filter((x) => x != index);
  return indexesClone[Math.floor(Math.random() * indexesClone.length)];
};
//if we know that we will only remove one index from the list, we can replace    "indexClone.lenght" and use "list.lenght - 1" instead.
const GetNonRepeatedRandomIndex = (list, index) => {
  const indexesClone = list.map((x, i) => (x = i)).filter((x) => x != index);
  return indexesClone[Math.floor(Math.random() * list.lenght - 1)];
};

//v5
const GetNonRepeatedRandomIndex = (list, index) => {
  return list.map((x, i) => (x = i)).filter((x) => x != index)[
    Math.floor(Math.random() * (list.length - 1))
  ];
};

//v6
const GetNonRepeatedRandomIndex = (list, index) => {
  list.map((x, i) => (x = i)).filter((x) => x != index)[
    Math.floor(Math.random() * (list.length - 1))
  ];
};
