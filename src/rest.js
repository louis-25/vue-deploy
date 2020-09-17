import store from './store'

var axios = require('axios')
var data = JSON.stringify({ token: store.state.fireUser.uid, email: store.state.fireUser.email, name: store.state.fireUser.displayName })

console.log('rest.js')
var config = {
  method: 'post',
  url: 'http://35.232.181.79:3000/oauth/useToken',
  headers: {
    'Content-Type': 'application/json'
  },
  data: data
}

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log(error)
  })
