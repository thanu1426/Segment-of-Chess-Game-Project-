var queen = {
  position: {
    x: 0,
    y: 0,
  },
};

var board = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"],
];

function move(numberOfSteps, direction) {
  let temp;
  let temp1;
  switch (direction) {
    case "E":
      temp = queen.position.y + numberOfSteps;
      if (temp < 0 || temp > 8) {
        console.log("Oops! Out of Boundary");
        document.write("Oops! Out of Boundary");
      } else {
        queen.position.y = temp;
      }
      break;
    case "W":
      temp = queen.position.y - numberOfSteps;
      if (temp < 0 || temp > 8) {
        console.log("Oops! Out of Boundary");
        document.write("Oops! Out of Boundary");
      } else {
        queen.position.y = temp;
      }
      break;
    case "S":
      temp = queen.position.x + numberOfSteps;
      if (temp < 0 || temp > 8) {
        console.log("Oops! Out of Boundary");
        document.write("Oops! Out of Boundary");
      } else {
        queen.position.x = temp;
      }
      break;
    case "N":
      temp = queen.position.x - numberOfSteps;
      if (temp < 0 || temp > 8) {
        console.log("Oops! Out of Boundary");
        document.write("Oops! Out of Boundary");
      } else {
        queen.position.x = temp;
      }
      break;
    case "SE":
      temp = queen.position.x + numberOfSteps;
      temp1 = queen.position.y + numberOfSteps;
      if ((temp < 0 || temp > 8) && (temp1 > 8 || temp1 < 0)) {
        console.log("Oops! Out of Boundary");
        document.write("Oops! Out of Boundary");
      } else {
        queen.position.x = temp;
        queen.position.y = temp;
      }
      break;
    case "NW":
      temp = queen.position.x - numberOfSteps;
      temp1 = queen.position.y - numberOfSteps;
      if ((temp < 0 || temp > 8) && (temp1 > 8 || temp1 < 0)) {
        console.log("Oops! Out of Boundary");
        document.write("Oops! Out of Boundary");
      } else {
        queen.position.x = temp;
        queen.position.y = temp;
      }
      break;
    case "SW":
      temp = queen.position.x + numberOfSteps;
      temp1 = queen.position.y - numberOfSteps;
      if ((temp < 0 || temp > 8) && (temp1 > 8 || temp1 < 0)) {
        console.log("Oops! Out of Boundary");
        document.write("Oops! Out of Boundary");
      } else {
        queen.position.x = temp;
        queen.position.y = temp;
      }
      break;
    case "NE":
      temp = queen.position.x - numberOfSteps;
      temp1 = queen.position.y + numberOfSteps;
      if ((temp < 0 || temp > 8) && (temp1 > 8 || temp1 < 0)) {
        console.log("Oops! Out of Boundary");
        document.write("Oops! Out of Boundary");
      } else {
        queen.position.x = temp;
        queen.position.y = temp;
      }
      break;
    default:
      document.write("Invalid Input");
  }
}

function play() {
  var value = document.getElementById("position").value;
  const $messageId = document.getElementById("message");
  var message;
  var input = value.split(" ");
  input.forEach((num) => {
    let number = Number(num.slice(num.length - 1));
    let dir = num.slice(0, num.length - 1);
    move(number, dir);
  });
  message =
    "Queen's current Position => " + board[queen.position.x][queen.position.y];
  console.log(message);
  $messageId.innerHTML = message;
}
