var mySlicePrompt = prompt();
var slice = mySlicePrompt.slice(0, 139);
var sliceLenght = slice.length;

console.log(
  "You have written " +
    sliceLenght +
    " you have " +
    (140 - sliceLenght) +
    " characters left"
);

// console.log(
//   "You have written " +
//     slice.lenght +
//     " , you have " +
//     (140 - slice) +
//     "characters left"
// );
