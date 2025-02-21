const accountId = 54597645;
let accountEmailId = "debjitdey559@gamil.com";
var accountPassword = 20179246;
accountCity = "jaipur";

// accountId = 2547895; // "accountId" not to  be allowed

console.log(accountId);
console.log(accountCity); // key Word not use But output is be exists

accountEmailId = "debjitdey@outlook.com"; // "accountEmailId" is to be allowed , let = "block-scoped local variables"
accountPassword = 4444;
console.log(accountEmailId); //Exists
//Different TErms Of the Output Exists
console.log([accountEmailId, accountId, accountPassword, accountCity]); // there output is to  be array
console.table([accountEmailId, accountId, accountPassword, accountCity]); // there are the table format Output

// LET

function value() {
  if (true) {
    let c = 12;
    console.log(c);
  }
  console.log(c);
}
return value;

//The let declaration declares re-assignable, block-scoped local variables

//var*****

function values() {
  if (true) {
    var a = 15;
  }
  console.log(a);
}
return values();

//The var statement declares function-scoped or globally-scoped variables
