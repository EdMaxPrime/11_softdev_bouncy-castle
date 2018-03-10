//Add an event that creates a bouncing circle whenever the svg element is clicked
document.getElementById("svg").addEventListener("click", function(evt) {
    //Initialize velocity to a random direction
    var velocityX = (Math.random() - 0.5) * 5;
    var velocityY = (Math.random() - 0.5) * 5;

    //Initialize position to be the spot where mouse clicked
    var x = evt.offsetX;
    var y = evt.offsetY;

    //Create the circle element
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", "10");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("fill", "#82CAFF");

    //Add the circle to the svg container
    this.appendChild(circle);

    //create the animation loop, runs 30/second
    var id = setInterval(function() {}, 1000 / 30);

    //tell the clear button to stop this animation loop when it is clicked
    document.getElementById("clear").addEventListener("click", function(evt) {});
});