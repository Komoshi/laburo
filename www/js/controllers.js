angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AuthCtrl', function($scope, AuthService) { 
  $scope.datos = {
    email: "", 
    password: ""
  }; 

  $scope.login = function(){
    AuthService.autorizar($scope.datos.email, $scope.datos.password)
  };
})

.controller('LoginNewCtrl', function($scope, $stateParams, UsuariosService, localStorageService) {
   $scope.datos = {
    email: "", 
    password: "",
    sexo: "",
    edad: "",
    fecha: ""
  }; 

  $scope.dato = "";
  
  $scope.crearUsuario = function(){
    UsuariosService.crear($scope.datos.email, $scope.datos.password, $scope.datos.sexo, $scope.datos.edad, $scope.datos.fecha)
  };
  $scope.borrar = function(){
    UsuariosService.delete($scope.datos.email);
  };
  $scope.update = function(){
    UsuariosService.update($scope.datos.email, $scope.datos.password, $scope.datos.sexo, $scope.datos.edad, $scope.datos.fecha);
  };
  $scope.read = function(){
    $scope.dato = UsuariosService.read($scope.datos.email);
    //UsuariosService.read('grhr@o.com-sexo');
    //UsuariosService.read('grhr@o.com-edad');
  };
})

.directive('dianaCreate', function(){
  return {
    transclude: true,
    
    templateUrl: 'templates/template.html'
  }
})

.controller('contactsCtrl', function($scope, RestfullService) {
  $scope.contact = {
    user: "", 
    pass: ""
  }; 

  $scope.contacts = function(){
    RestfullService.post($scope.contact.user, $scope.contact.pass);
  }
  /*$http.post("http://localhost/WebAppK/servicio_restfull.php", {"usuario":"Lala", "contra":"fdgvf", "ruta":"signup"})
  .then(function(response) {
    //$scope.names = response.contacts;
    console.log(response);
  });*/
})

.directive('showServer', function(RestfullService, DatosLocalService){
  return {
    transclude: true,
    templateUrl: 'templates/serverphp.html',
    link: function(element, attr){

      var lang_id = RestfullService.getLangMsg(1, "hgriugbh");
      console.log("Me devolvio lang_id");
      //ar msg = DatosLocalService.get(lang_id, lang_msg);
      /*element.css(
        'color: green'
      )*/

      //ideoma_code = RestfullService.getIdeomaCode --> 2, ingles
      //que_mensaje_code = RestfullService.getRespuestaDelMetodo -> code:b
      // DatosLocalService.traemeMensaje(ideomaCode,que_mensaje_code)
    }
  }
})