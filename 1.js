function result() {

var x, y,z;

x = document.getElementById("degree").value;
x = parseInt(x);

y = x*1.8+32;

z = (x + " градусов по Цельсию это "+ y + " по Фаренгейту");

document.getElementById('out').innerHTML = z;
}