$( document ).ready(function(){
  $('input#txtInput').keyup(function() {
    var find = $(this).val();
    var text = $('#content').text();
    text = text.replace(new RegExp(find, 'g'), "<span class='highlight'>"+find+"</span>");
    $('#content').html(text);
  });
});
