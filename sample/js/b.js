/**
 * b.js
 */
var piyo = 'piyo';
for (var i = 0; i < 10; i++) {
  piyo = piyo + piyo;
}

var p = document.createElement('p');
p.textContent = piyo;
document.body.appendChild(p);
