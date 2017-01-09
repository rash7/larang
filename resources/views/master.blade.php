<!DOCTYPE html>
<html ng-app="myApp">
<head>
   <title>Приложение на Angular JS</title>
   <link rel="stylesheet" type="text/css" href="{{ asset('css/bootstrap.min.css') }}">
   <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
   <link rel="stylesheet" type="text/css" href="{{ asset('bower_components/dropzone/dist/basic.css') }}">
   <link rel="stylesheet" type="text/css" href="{{ asset('bower_components/dropzone/dist/dropzone.css') }}">
   <script>var baseUrl = "{{ url('/') }}/";
           var csrfToken = "{{ csrf_token() }}";
   </script>
</head>
<body>
     <div class="container" ng-controller="globalController">

      

       <div ng-view></div>
     </div>
     <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
     <script type="text/javascript" src="{{asset('bower_components/angular/angular.min.js')}}"></script>
     <script type="text/javascript" src="{{asset('bower_components/angular-route/angular-route.min.js')}}"></script>
     <script type="text/javascript" src="{{asset('bower_components/angular-cookies/angular-cookies.min.js')}}"></script>

     <script type="text/javascript" src="{{asset('bower_components/dropzone/dist/dropzone.js')}}"></script>

     <script type="text/javascript" src="{{asset('js/app.js')}}"></script>
     <script type="text/javascript" src="{{asset('js/models.js')}}"></script>
     <script type="text/javascript" src="{{asset('js/controllers.js')}}"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
</body>
</html>