const socket = io('/');

const getElementById = (id) => document.getElementById(id) || null;

const helloStrangerElement = getElementById('hello_stranger');
const chattingBoxElement = getElementById('chatting_box');
const formElement = getElementById('chat_form');

const drawHelloStranger = (username) => {
  helloStrangerElement.innerText = `Hello ${username} Stranger`;
};
function helloUser() {
  const username = prompt('What is your name');
  socket.emit('new_user', username, (data) => {
    console.log(data);
  });
}

function init() {
  helloUser();
}
init();
