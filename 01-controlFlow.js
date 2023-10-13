function moveCommand(direction) {
  let whatHappens;
  switch (direction) {
    case "forward":
      whatHappens = "You can move forward";
      break;
    case "backward":
      whatHappens = "you can move backward";
      break;
    default:
      whatHappens = "Error";
      break;
  }
  return whatHappens;
}

console.log(moveCommand("forward"));