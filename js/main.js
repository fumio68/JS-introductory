'use strict';

{
  $(function(){
    $.ajax({url: 'data.json', dataType: 'json'})
    .done(function(data){
      data.forEach(function(item, index){
        console.log(item);
      });
    })
    .fail(function(){
      window.alert('読み込みエラー');
    });
  });
}