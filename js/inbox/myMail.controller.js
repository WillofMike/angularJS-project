(function(){
  var app = angular.module('angularProject').controller('myMail', myMail);

  function myMail ($http){
    const vm = this;

    $http.get("https://mike-ng-server.herokuapp.com/api/messages").then((res)=>{
      vm.mail = res.data._embedded.messages
    })


    vm.star = function(id, bool){
      console.log('hi');
      let data = {
        "messageIds": [id],
        "command": "star",
        "star": bool
      }
      $http.patch('https://mike-ng-server.herokuapp.com/api/messages', data).then(()=> {
        $http.get("https://mike-ng-server.herokuapp.com/api/messages").then((res)=>{
          vm.mail = res.data._embedded.messages
        })
      })
    }
  }

})()
