var express = require('express');
var router = express.Router();
const data = require('../data/generateList')(10)
/* GET home page. */

const filterResults = (query) => {
  let result = data;
  Object.keys(query).forEach((key) => {
    tempResult = result.filter((el) => {
      return el[key].includes(query[key])
    })
    result = tempResult;
  })
  return result;
}
router.get('/', function ({
    query
  },
  res, next) {
  const {
    name,
    city,
    email,
    phone
  } = query;
  let result = filterResults({
    name,
    city,
    email,
    phone
  });
  const funds = parseInt(query.funds)
  if (funds > 0) {
    result = result.filter((el) => parseInt(el.funds) > funds)
  } else {
    result = (funds != 0 || funds == undefined) ? result.filter((el) => parseInt(el.funds) < Math.abs(funds)) : result
  }
  const {
    offset,
    limit
  } = query;
  resultData = result.slice(offset, offset + limit);
  res.json({
    data: resultData,
    count: result.length
  })
});
router.put('/update/:id', function (req, res, next) {
  data[req.params.id - 1] = {
    id: +req.params.id,
    ...req.body
  }
  res.status(200);
  res.send(data[req.params.id - 1]);
})

module.exports = router;