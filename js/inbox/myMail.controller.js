(function(){
  var app = angular.module('angularProject').controller('myMail', myMail);

  function myMail ($http){
    const vm = this;

    $http.get("http://localhost:8000/emails").then((res)=> {
      console.log('the emails', res)
      vm.mail = res.data
    })

// https://mike-ng-server.herokuapp.com/api/messages this is for the hyperapi
    vm.star = function(id, bool) {
      console.log('hi');
      let data = {
        // "messageIds": [id],
        // "command": "star",
        "isStarred": bool
      }
      $http.put('http://localhost:8000/emails', data).then(()=> {
        $http.get("http://localhost:8000/emails").then((res)=>{
          vm.mail = res.data
        })
      })
    }
  }

})()
