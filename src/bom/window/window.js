var age = 29;
var sayAge = () => alert(this.age);
sayAge(); // 29
window.sayAge(); // 29
