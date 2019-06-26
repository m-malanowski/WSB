TweenLite.defaultEase = Linear.easeNone;

var svgns = "http://www.w3.org/2000/svg";
var root = document.getElementById("svg");
var ease = 0.75;

var pointer = {
x: window.innerWidth  / 2,
y: window.innerHeight / 2
};

window.addEventListener("mousemove", function(event) {
pointer.x = event.clientX;
pointer.y = event.clientY;
});

var leader = pointer;

var total = 80;
for (var i = 0; i < total; i++) {
leader = createLine(leader, i);
}

function createLine(leader, i) {

var line = document.createElementNS(svgns, "line");
root.appendChild(line);

TweenLite.set(line, { x: -15, y: -15, alpha: (total - i) / total });

var pos = line._gsTransform;

TweenMax.to(line, 1000, {
x: "+=1",
y: "+=1",
repeat: -1,
modifiers: {
x: function() {
var x = pos.x + (leader.x - pos.x) * ease;
line.setAttribute("x2", leader.x - x);
return x;
},
y: function() {
var y = pos.y + (leader.y - pos.y) * ease;
line.setAttribute("y2", leader.y - y);
return y;
}
}
});

return pos;
}
