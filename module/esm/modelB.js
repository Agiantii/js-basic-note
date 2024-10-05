export const message = 'Hello from ModelB';
export function sentMessage() {
    console.log('Message sent from ModelB');
}
export default {
    name: 'ModelB',
    sentMessage: function () {
        console.log('Message sent from ModelA');
    }
}