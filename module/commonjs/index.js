// console.log("model index ")
// run in nodejs environment

// a.js and b.js are commonjs modules,different way to export module

// a.js

// module.exports ={
//     message:'message from a.js',
//     sentMessage:function(){
//         console.log('message sent from a.js')
//     }
// }
// exports.test = 'test'

// b.js

// sentError = function () {
//     console.log('error sent from b.js')
// }

// exports.message = 'message from b.js'
// exports.sentMessage = function () {
//     console.log('message sent from b.js')
// }
// exports.sentError = sentError



const a = require('./a.js')
const b = require('./b.js')
console.log(a.test)
console.log(a.message)
b.sentMessage()
b.sentError()

// output 
// undefined                -- module.exports can be combined with exports.variable
// message from a.js
// message sent from b.js
// error sent from b.js