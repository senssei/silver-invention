var app = angular.module('mainModule',[]);

app.controller('mainCtrl', function($http){
    var vm = this;
    
    $http.get('/api/data').then(function(res){
        vm.lol = res.data.value;
    });
});