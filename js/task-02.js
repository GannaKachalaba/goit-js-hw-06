const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElem = document.querySelector("#ingredients");

const navItem = ingredients.map(ingredient => {
  const listItemElem = document.createElement("li");
  listItemElem.classList.add('item');
  listItemElem.textContent = ingredient;
  return listItemElem;
});
  
listElem.append(...navItem);

 console.log(listElem);
 console.log(navItem);