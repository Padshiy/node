var pharases = require('./ru.json');

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    console.log(pharases.Hello + ", " + who.name);
};

exports.User = User; //экспорт переменной