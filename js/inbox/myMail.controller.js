(function(){
  var app = angular.module('angularProject').controller('myMail', myMail);

  function myMail (mainSvc){
    const vm = this;

    mail.getmail()
      .then(function(res){
      vm.mail =res.data._embedded.messages
    })

    app.service('mainSvc', function($http){
      const vm = this;
      vm.getMail = function() {
        return $http.get("https://mike-ng-server.herokuapp.com/api/messages")
      }
    })
  }
})()
