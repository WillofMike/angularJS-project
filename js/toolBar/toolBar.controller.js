(function(){
  angular.module('angularProject').controller('toolBar', toolBar)

function toolBar(){
  const vm = this;
    vm.selectAll = function (mail) {
    let selected = mail.filter(i => i.selected === true)
       if (mail.length === selected.length) {
         mail.map(i => i.selected = false)
       } else {
         mail.map(i => i.selected = true)
       }
  }
  vm.markRead = function(mail){
      let checked = mail.filter(i => i.selected === true)
      checked.map(i => i.read = true)
      mail.map(i => i.selected =false)
  }
  vm.markUnread = function(mail){
    let checked = mail.filter(i => i.selected === true)
    checked.map(i => i.read = false)
    mail.map(i => i.selected =false)
  }
  vm.badge = function(mail){
    let unRead = mail.filter(i => i.read === true)
  }
  vm.labels = [
    {id:1, label: 'dev'},
    {id:2, label: 'personal'},
    {id:3, label: 'gschool'}
  ]
  vm.label = function(labels, mail){
    let selected = mail.filter(i => i.selected === true)
    let findArr = selected.map(i => i.labels)
    for (var i = 0; i < findArr.length; i++) {
      if (!findArr[i].includes(labels)) {
        findArr[i].push(labels)
      }
    }
    mail.map(i => i.selected =false)

  }
  vm.removeLabel = function (labels, mail){
    let selected = mail.filter(i => i.selected === true)
    let findArr = selected.map(i => i.labels)
    let labFind = selected.map(i =>i.labels.indexOf(labels))
    console.log(labFind);
    console.log(findArr);
    console.log(selected);
    for (var i = 0; i < findArr.length; i++) {
      if (findArr[i].includes(labels)) {
        console.log('lab here ', labFind);
        console.log('find arr here ', findArr[i]);
        findArr[i].splice(labFind, 1)
        console.log('find arr after ', findArr[i]);
      }
    }
      mail.map(i => i.selected =false)
  }
  vm.remove = function(mail){
    console.log('hi');
    let selected = mail.filter(i => i.selected === true)
    let index = 0
    console.log(selected);
      for (var i = 0; i < selected.length; i++) {
        for (var j = 0; j < mail.length; j++) {
          if (selected[i].id === mail[j].id) {
            mail.splice(j, 1)
          }
        }
      }
  }
}
})()
