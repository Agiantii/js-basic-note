export const message ='Hello from ModelA';
export function sentMessage() {
    console.log('Message sent from ModelA');
}
export default {
    name: 'ModelA',
    sentMessage:function(){
        console.log('Message sent from ModelA');
    }
}