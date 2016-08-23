;(function(){


    var mainApp =angular.module("mainApp",[]);
    mainApp.factory('servicefunction', function(){
        var factory={};
        factory.multiply=function(a,b){
            return a*b
        }
        return factory;

    });
   mainApp.service('Calcservice', function(servicefunction){
       this.multiply=function(a){
           return servicefunction.add(a,a);
       }
   }

   )
      mainApp.controller('CalCtrl', function ($scope,CalCtrl){
          $scope.multiply=function(){
              $scope.result=Calcservice.multiply($scope.number);
          }
      });
  
})();

