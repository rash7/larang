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