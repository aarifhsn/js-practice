// object literal

var message = {
    body: function() {
        return `Hi, i am aarif hassan`;
    }
}

console.log(message.body());


// es6 consize syntax

 message = {
    body() {
        return `Hi, i am aarif hassan2`;
    }
}

console.log(message.body());

// es6 consize syntax (using space in functions name)

message = {
    'body name'() {
        return `Hi, i am aarif hassan3`;
    }
}

console.log(message['body name']());
