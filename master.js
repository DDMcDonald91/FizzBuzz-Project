const secretBtn = document.getElementById('secretBtn');
const secretTxt = document.querySelector('secretTxt');


const reveal = function(){
  $( "#secretBtn" ).click(function() {
    $( "#secretTxt" ).toggle();
})
};

const fizzBuzz = function(){
  for(i=1; i<101; i++){if(i % 15 == 0){console.log("Fizz Buzz")}
  else if(i % 3 == 0){console.log("Fizz")}
  else if(i % 5 == 0){console.log("Buzz")}
  else console.log(i);
    };
};

$("#secretBtn").click(function(){
    $("#secretTxt").toggle();
    console.log(fizzBuzz())
  });

/*
secretBtn.addEventListener('click', function (){
  reveal();
  fizzBuzz();
});
*/
