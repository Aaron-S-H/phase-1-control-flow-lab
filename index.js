function scuberGreetingForFeet(distance) {
  let greeting;
  if (distance <= 400 ) {
    return greeting = 'This one is on me!';
  } else if 
    (distance >= 400 && distance <= 2000) {
     return greeting = 'That will be twenty bucks.';
  } else if 
    (distance > 2000 && distance < 2500) {
     return greeting = 'I will gladly take your thirty bucks.';
    } else {
      return greeting = 'No can do.';
    }
}



function ternaryCheckCity(city) {
return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
}





function switchOnCharmFromTip(tip){
  switch (tip){ 
    case 'generous':
      return 'Thank you so much.';
      case 'not as generous':
        return 'Thank you.';
      default: 
      return 'Bye.';

 
}
}