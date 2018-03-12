//Add an event that creates a bouncing circle whenever the svg element is clicked
document.getElementById("svg").addEventListener("click", function(evt) {
    //make variables for dimensions of the svg container
    var WIDTH = parseInt(this.getAttribute("width"));
    var HEIGHT = parseInt(this.getAttribute("height"));

    //Initialize velocity to a random direction
    var velocityX = (Math.random() - 0.5) * 10;
    var velocityY = (Math.random() - 0.5) * 10;

    //Initialize position to be the spot where mouse clicked
    var x = evt.offsetX;
    var y = evt.offsetY;

    //Make the radius inversley proportional to how fast the circle is moving
    var r = 20 - 2*Math.sqrt(velocityX*velocityX + velocityY*velocityY);

    //Create the circle element
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", r);
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("fill", "#82CAFF");

    //Add the circle to the svg container
    this.appendChild(circle);

    //create the animation loop, runs 30/second
    var id = setInterval(function() {
        //check bounds for bounce
        if(x + r >= WIDTH) {
            velocityX *= -1;
            x = WIDTH - r - 1;
        } else if(x - r <= 0) {
            velocityX *= -1;
            x = r + 1;
        }
        if(y + r >= HEIGHT) {
            velocityY *= -1;
            y = HEIGHT - r - 1;
        } else if(y - r <= 0) {
            velocityY *= -1;
            y = r + 1;
        }
        //update variables
        x += velocityX;
        y += velocityY;
        //move the element on screen
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
    }, 1000 / 30);

    //tell the clear button to stop this animation loop when it is clicked
    document.getElementById("clear").addEventListener("click", function(evt) {
      svg.innerHTML = "";
        //should do clearInterval() on the id
        //remove the circle from the svg(try "circle.remove()")
    });
});
