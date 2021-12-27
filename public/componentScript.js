import { nuterientList } from './nutrients.js';

let nutrients = document.getElementById('nutrients');

const getNutriComponents = (item) => {
  let option = document.createElement('option');
  option.value = `${item.name} (${item.nutrientUnit.name})`;
  nutrients.appendChild(option);
}

nuterientList.forEach(getNutriComponents);


    //  action="https://api.nal.usda.gov/fdc/v1/foods/search" 
    //  method="GET"