myApp.controller('userController', ['$scope', '$location', 'userModel', function($scope, $location, userModel) {
  
 angular.extend($scope, {

 	login: {
 		username: 'rashid96@mail.ru',
 		password: 'gfhjkm'
 	}
 });

  angular.extend($scope, {
  	doLogin: function(loginForm){

  		var data = {

  			email: $scope.login.username,
  			password: $scope.login.password
  		};
  		userModel.doLogin(data).then(function(){

  			$location.path('/dashboard');
  		});
  	}
  	
  });
}]);
myApp.controller('globalController', ['$scope', function($scope){

  $scope.global = {};

  $scope.global.navUrl = 'templates/partials/nav.html';

}]);
myApp.controller('navController', ['$scope', '$location', 'userModel', function($scope, $location, userModel){

   angular.extend($scope, {
   
    user : userModel.getUserObject(), 
    
    navUrl: [{
   
    link: 'Home',
    url: '!/dashboard',
    subMenu: [{
     link: 'View Gallery',
     url: '!/gallery/view'

    },
       
    {
     link: 'Add Gallery',
     url: '!/gallery/add'

    }

    ] 

    }, 
 
    {
   
     link: 'View Gallery',
     url: '!/gallery/view'

    }, 
    {
   
      link: 'Add Gallery',
     url: '!/gallery/add'

    }
   
    ]

   });

  angular.extend($scope, {

   doLogout: function() {

  		userModel.doUserLogout();
  		$location.path('/');
  	},

  	checkActiveLink: function(routeLink) {

      if($location.path() == routeLink) {
      	return 'make-active';
      }

  	}

  });

}]);
myApp.controller('galleryController', ['$scope', '$location', 'galleryModel', '$timeout', '$routeParams', 
	function($scope, $location, galleryModel, $timeout, $routeParams){
/* Get all galleries */
galleryModel.getAllGalleries().then( function onSuc(response){
	 
	$timeout( function(){
	$scope.galleries = response.data;
	$scope.showGalleries = true;
	}, 500);
	
});
/* if the param is present, load the single gallery data */
if($routeParams.id) {
	
	galleryModel.getGalleryById($routeParams.id).then( function onSu(response){
     $scope.singleGallery = response.data;
     
	});
}

/*Variables*/
  angular.extend($scope, {
  	newGallery: {


  	},
  	errorDiv: false,
  	errorMessages: [],
  	singleGallery: {},
  	dropzoneConfig: {
  		'options': { // passed into the Dropzone constructor
            'url': baseUrl + 'upload-file'
                  },
    'eventHandlers': {
      'sending': function (file, xhr, formData) { 
      	console.log('sending');
       formData.append('_token', csrfToken);
       formData.append('galleryId', $routeParams.id);
        },
      'success': function (file, response) {
       console.log('success');
       console.log(response); 
        }
    }
  	}
  });
 /*Functions*/

 angular.extend($scope, {
 	saveNewGallery: function(addGalleryForm){
 		console.log(addGalleryForm);
 		if(addGalleryForm.$valid) {
 			$scope.formSubmitted = false;
 			galleryModel.saveGallery($scope.newGallery).then(function onSucc(response) {
    // Handle success
   $location.path('/gallery/view');
  }); 
    
 		} else {
 			$scope.formSubmitted = true;
 			console.log('Error');
 		}
 	},
 	viewGallery: function(id) {
 		$location.path('gallery/view/' + id);
 	}
 });
}]);
//# sourceMappingURL=controllers.js.map
