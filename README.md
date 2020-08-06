# p5-Polygon-Generator
Creates polygons from vertices that can be placed with mouse clicks.
It does not use p5.js's polygon/shape functionality, all functionaliy is my own.

## Online page sketch
Go to the online editor and see my sketch [here](https://editor.p5js.org/Pepsalt/sketches/KB47yIhwP)
View the github-pages page [here](https://kingpepsalt.github.io/p5-Polygon-Generator/PolygonGenerator/)

## Simple explanation
I did this with my own method and haven't researched into this, just doing what I felt would work - this does not mean I won't ever research better methods and then implement those perhaps as alternative github-page directories.

### How does my method work?
The first thing that happens is a weighted center will be found by finding the average of all the points. It does not need to be perfect, this just guarantees it will at least lie somewhere within the final polygon which is needed for the next step.

Then all points are translated by this center so the shape will be around the origin. This can be seen differently - it could also be seen as forming a vector CA where C is the weighted center and A is the point in reference.

Finally, using arctan2, we can get the theta aspect, sort of like a partial polar coordinate. Then we can sort based on theta which will give us the vertices of the polygon in clockwise order.

Whilst polar coordinates is one way to think of this, it is not the 'correct' way or the 'incorrect' way to think of it.
