var GEOLONIA_DASHBOARD_URL = 'https://app.geolonia.com'
var AWS_REGION = 'ap-northeast-1'
var AWS_COGNITO_USER_POOL_ID = 'ap-northeast-1_BQBpq1Fia'
var AWS_COGNITO_USER_POOL_CLIENT_ID = '74m6o4d1h7eiok9mmepfiuqq0j'

var poolData = {
  UserPoolId: AWS_COGNITO_USER_POOL_ID,
  ClientId: AWS_COGNITO_USER_POOL_CLIENT_ID
}

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData)

document.addEventListener('DOMContentLoaded', function() {
  var message = document.getElementById('message')
  var username = document.getElementById('username')
  var password = document.getElementById('password')
  var email = document.getElementById('email')
  var signUpButton = document.getElementById('sign-up')

  ;[username, password, email].forEach(function(elem) {
    elem.addEventListener('keydown', function() {
      message.classList.add('hidden')
    })
  })

  signUpButton.addEventListener('click', function() {
    signUpButton.setAttribute('disabled', 'disabled')
    var prevButtonText = signUpButton.innerText
    signUpButton.innerText = 'サインインしています...'

    var attributeList = [{ Name: 'email', Value: email.value }]

    userPool.signUp(
      username.value,
      password.value,
      attributeList,
      null,
      function(err, result) {
        if (err) {
          signUpButton.removeAttribute('disabled')
          signUpButton.innerText = prevButtonText
          message.classList.remove('hidden')
        } else {
          var url =
            GEOLONIA_DASHBOARD_URL + '/verify?username=' + username.value
          location.replace(url)
        }
      }
    )
  })
})
