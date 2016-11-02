var User = require('./user/'); //подключение внешнего файла
var db = require('db');
db.connect();

function run() {
    var vasya = new User("Вася");
    var petya = new User("Петя");

    vasya.hello(petya);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}