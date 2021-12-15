const express = require('express');
const axios = require('axios');

const { nuterientList } = require('./nutrients.js')

const app = express()

PORT = process.env.PORT || 3002

// https://fdc.nal.usda.gov/portal-data/external/nutrientList/search

const parms = (id) => ({
      "nutrientGid":id,
      "pageNumber":1,
      "sortField": "nutrientPerHundred",
      "sortDirection":null,
      "resultsPerPage":25,
      "foodTypes":["Foundation","Survey (FNDDS)","SR Legacy"]
      });

app.get('/search', async (req, res, next) => {
  const { qConponent } = req.query
  const { id } = nuterientList.find((obj) => `${obj.name} (${obj.nutrientUnit.name})` === qConponent)
  try {
    const response = await axios.post('https://fdc.nal.usda.gov/portal-data/external/nutrientList/search', parms(id));
    res.send(response.data)
  }
  catch(e) {
    next(e)
  }
})

app.listen(PORT, (err) => {
  if (err) {
    console.error(err)
    return 
  } 
  console.log('google')
})