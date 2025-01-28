//var let const
//var -- PREFER NOT TO USE BECAUSE OF ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
//let use it 
//const use it for constant values  -- not changable

const accountId=144553
let accountEmail="s@gmail.com"
var accountPass="1234"
accountCity="Jaipur"

let accountState;

//accountId=2 --> not allowed.

accountEmail="c@gmail.com"
accountPass="1212"
accountCity="Blr"


console.log(accountId)

console.table([accountId,accountEmail,accountPass,accountCity,accountState])