var user = require('./user/'); //подключение внешнего файла

var vasya = new user.User("Вася");
var petya = new user.User("Петя");

vasya.hello(petya);