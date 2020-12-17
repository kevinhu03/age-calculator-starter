$("button").click(function() {
  let birthYear = $(".year").val();
  let name = $('.name').val();
  let age = 2020 - birthYear;
  
  $(".message").text(`${name} is ${age} years old`);
});