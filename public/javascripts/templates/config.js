; (function(){
   angular
       .module('myApp',[
           'ui.router'           
       ]).config(['$stateProvider', '$urlRouterProvider', '$httpProvider',routeconfig]);
       
   function routeconfig($stateProvider,$urlRouterProvider,$httpProvider) {
      $stateProvider
      .state('employeedetails',{
          url:'/employeedetails',
          templateUrl:'templates/employeedetails.html',
          controller:'CalCtrl'})  
          return $urlRouterProvider.otherwise('employeedetails')
      }
    
})();