
sentError = function () {
    console.log('error sent from b.js')
}

exports.message='message from b.js'
exports.sentMessage = function(){
    console.log('message sent from b.js')
}
exports.sentError = sentError

