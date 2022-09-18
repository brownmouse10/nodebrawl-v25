const ByteStream = require("../../../ByteStream");
const LoginOkMessage = new (require("../Server/LoginOkMessage"));
const OwnHomeDataMessage = new (require("../Server/OwnHomeDataMessage"));
const PiranhaMessage = require("../../PiranhaMessage");

class LoginMessage extends PiranhaMessage {
    constructor(client, bytes){
        super(bytes)
        this.client = client;
        this.id = 10100
        this.version = 0
    }

    decode(){
        // this.readInt()
    }

    process(){
        LoginOkMessage.send(this.client);
        OwnHomeDataMessage.send(this.client);
    }
}

module.exports = ClientHelloMessage
