function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400){
    return 'This one is on me!';
  }
  else if (feet > 400, feet <= 2000) {
    return 'That will be twenty bucks.';
  }
  else if (feet > 2000, feet < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'No can do.'
  }
}
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(1500));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));

function ternaryCheckCity(city){
  // Write your code here!
  let result = city==='NYC' ? 'Ok, sounds good.' : 'No go.';
  return result
}
console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Pittsburgh'));

function switchOnCharmFromTip(expression){
  // Write your code here!
  switch(expression) {
    case 'generous':
    return 'Thank you so much.';
    
    case 'not as generous':
    return 'Thank you.';
    
    default:
    return 'Bye.';
    }
  
}
switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');