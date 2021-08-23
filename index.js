const express = require('express')
const axios = require('axios')

const clientID = 'jcoutinho@rgp.com'
const clientSecret = 'Jua@221108'

const app = express()

app.get('/oauth/redirect', (req, res) => {
  const requestToken = req.query.code
  axios({
    method: 'post',
    url: `https://api-claroconnect.simplify.a1.digital/auth/realms/iot-connect/protocol/openid-connect/auth?
    client_id=graphiql
    &redirect_uri=https%3A%2F%2Fapi-claroconnect.simplify.a1.digital%2Fgraphiql
    &state=bf41be5c-ed7d-4c78-8cc7-bd5fb19bc96b
    &response_mode=fragment
    &response_type=code
    &scope=openid
    &nonce=7c8258cd-df7b-4e44-8d7e-aecd47c8af61`,
    headers: {
         accept: 'application/json'
    }
  }).then((response) => {
    const accessToken = response.data.access_token
    console.log(accessToken)
  })
})

app.use(express.static(__dirname + '/public'))
app.listen(8080)