'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (element === null) {
    document.body.append(createTree(true, data));
  } else {
    const ulList = document.createElement('ul');

    for (const key of Object.keys(data)) {
      const ulListRow = document.createElement('li');

      ulListRow.textContent = key;
      ulListRow.append(createTree(element, data[key]));
      ulList.append(ulListRow);
    }

    return ulList;
  }
}

createTree(tree, food);
