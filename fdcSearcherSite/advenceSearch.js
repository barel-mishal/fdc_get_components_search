// all these words -> add plus sign -> +candy +corn
// this exact word or phars -> "candy corn"
// any of these words -> candy corn
// none of these words ->corn  -candy -> get all corn without the word candy

const inputAllThisWords = document.getElementById('input-all-this-words');
const btnAllTheseWordsInput = document.getElementById('btn-all-this-words');

const inputExact = document.getElementById('input-exact');
const btnExact = document.getElementById('btn-exact');

const inputAnyOf = document.getElementById('input-any-of-these-words');
const btnAnyOf = document.getElementById('btn-any-of-these-words');

const inputNoneOfThese = document.getElementById('input-none-of-these');
const btnNoneOfThese = document.getElementById('btn-none-of-these');

const buttonAllQuery = document.getElementById('btn-all-query')

function queryFDC(value) {
  const url = 'https://api.nal.usda.gov/fdc/v1/foods/search'
  const query = `?query=${value}&api_key=dd4nolLmS5lCKsDpHg3TfxyeU2zHA4Rn6bfYAFrB&submit=Foods+Search`
  
  location.assign(url + query) 
}

function addStringToEachWord(string, element) {
  if (string) {    
    const words = string.split(' ');
    let newString = ''
    for (let i = 0; i < words.length; i++) {
      newString += `${element}${words[i]} `;
    }
    return newString.slice(0, newString.length-1)
  }
  else {
    return ''
  }
}

function addWarperToSentance(string, warp) {
  if (string) {
    return `${warp}${string}${warp}`
  }
  else {
    return ''
  }
}


// all this words

function afterActivetBtnAllThisWords() {
  const { value } = inputAllThisWords
  if (value) {
    const string = addStringToEachWord(value, '+');
    queryFDC(string)
  }
}
function afterActivetInputAllThisWords(event) {
  const { value } = inputAllThisWords
  if (value && event.keyCode === 13) {
    const string = addStringToEachWord(value, '+');
    queryFDC(string)
  }
}

// exact

function afterActivetbtnExactOfThese() {
  const { value } = inputExact
  if (value) {
    const string = addWarperToSentance(value, '"');
    queryFDC(string)
  }
}

function afterActivetInputExactOfThese(event) {
  const { value } = inputExact
  if (value && event.keyCode === 13) {
    const string = addWarperToSentance(value, '"');
    queryFDC(string)
  }
}

// any of these words

function afterActivetbtnAnyOfThese() {
  const { value } = inputAnyOf
  if (value) {
    const string = `${value}`;
    queryFDC(string)
  }
}

function afterActivetInputAnyOfThese(event) {
  const { value } = inputAnyOf
  if (value && event.keyCode === 13) {
    const string = `${value}`;
    queryFDC(string)
  }
}

// NoneOfThese

function afterActivetbtnNoneOfThese() {
  const { value } = inputNoneOfThese
  if (value) {
    const string = addStringToEachWord(value, '-');
    queryFDC(string)
  }
}

function afterActivetInputNoneOfThese(event) {
  const { value } = inputNoneOfThese
  if (value && event.keyCode === 13) {
    const string = addStringToEachWord(value, '-');
    queryFDC(string)
  }
}

// all queryies

function afterActivetbtnAllQueryies() {
  let allThisWords = inputAllThisWords.value
  let noneOfThese = inputNoneOfThese.value
  let anyOf = inputAnyOf.value
  let exact = inputExact.value
  const oneOfThis = noneOfThese || anyOf || exact || allThisWords
  if (oneOfThis) {
    allThisWords = addStringToEachWord(allThisWords, '+')
    noneOfThese = addStringToEachWord(noneOfThese, '-')
    anyOf = anyOf
    exact = addWarperToSentance(exact, '"')
    const string = `${noneOfThese} ${anyOf} ${exact} ${allThisWords}`
    queryFDC(string)
  }
}

buttonAllQuery.addEventListener('click', afterActivetbtnAllQueryies)

inputAllThisWords.addEventListener('keypress', afterActivetInputAllThisWords);
btnAllTheseWordsInput.addEventListener('click', afterActivetBtnAllThisWords);

btnExact.addEventListener('click', afterActivetbtnExactOfThese);
inputExact.addEventListener('keypress', afterActivetInputExactOfThese);

btnAnyOf.addEventListener('click', afterActivetbtnAnyOfThese);
inputAnyOf.addEventListener('keypress', afterActivetInputAnyOfThese);

btnNoneOfThese.addEventListener('click', afterActivetbtnNoneOfThese);
inputNoneOfThese.addEventListener('keypress', afterActivetInputNoneOfThese);



