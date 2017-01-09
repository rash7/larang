myApp.factory('userModel', ['$http', '$cookies', function($http, $cookies){

 var userModel = {

 };

 userModel.doLogin = function(loginData){

    return   $http({
        headers: {

            'Content-Type' : 'application/json'
        },
        url: baseUrl + 'auth',
        method: "POST",
        data: {
            email: loginData.email,
            password: loginData.password
        }

     })
    .then(function onSuccess(response) {
    // Handle success
    
    console.log('response',response);
    $cookies.put('auth', JSON.stringify(response));
  }).
  catch(function onError(data, status, headers) {
   console.log(data, status, headers);
   //$scope.error = 'неправильный логин или пароль'
   //console.log($scope.error);
   alert('Упс нет такого пользователя или введен неверно логин и пароль');
  }); 
    

    };

    userModel.getAuthStatus = function(){
     
     var status = $cookies.get('auth');
     if (status)
        { return true;}
     else {

        return false;
     }

    };
     
     // получение объекта user преобразованный в json из строки
    userModel.getUserObject  = function() {
      var userObj = angular.fromJson($cookies.get('auth'));
     // console.log(userObj);
      return userObj;
      
    }

    userModel.doUserLogout = function() {

     $cookies.remove('auth');

    }

 return userModel;
}]);