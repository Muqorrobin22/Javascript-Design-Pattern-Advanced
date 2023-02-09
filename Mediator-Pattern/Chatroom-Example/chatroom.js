// The Example of Mediator Pattern
// Best Cases for Mediator Pattern is Chatroom

class Chatroom {
  logMessage(user, message) {
    const time = new Date();
    let sender = user.getName();

    console.log(`${time} [${sender}] : ${message}`);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chat = new Chatroom();
const robin = new User("robin", chat);

robin.send("Hello, I Love U, gud Night 💖");
