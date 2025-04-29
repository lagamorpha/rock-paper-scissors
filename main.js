const RPS = {};

function game(roll) {
  roll = Math.floor(Math.random() * 3);
  if(roll = 0) {
    return 'rock';
  } else if(roll = 1) {
    return 'paper';
  } else if(roll = 2) {
    return 'scissors';
  } else {
    return 'error';
  }
};

export default RPS;