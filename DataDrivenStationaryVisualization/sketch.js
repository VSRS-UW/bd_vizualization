var cells = [];
let controls = []; // define this globally

function randomG(v, range) {
    // approximates gaussian distribution by averaging repeated random numbers
    // v : number of repeats
    // range : maximum number
    var r = 0;
    for (var i = 0; i < v; i++) {
        r += random(range);
    }
    return r / v;
}

function resetCells() {
    // Get new number of cells
    let numCells = controls.filter(d => d.id == "numberOfCells")[0].control.value();
    let cellDist = controls.filter(d => d.id == "cellDistribution")[0].control.value();

    voronoiClearSites()
    cells = [];
    // create center points of cells

    for (var cell = 0; cell < numCells; cell++) {
        cells.push([int(randomG(cellDist, width)), int(randomG(cellDist, height))]);
    }

    // pass center points to voronoi
    voronoiSites(cells);
    voronoi(700, 600, true);
}

function setup() {
    // sets up canvas, voronoi settings, and points
    createCanvas(700, 600);
    // set up voronoi settings
    voronoiCellStrokeWeight(1);
    voronoiSiteStrokeWeight(3);
    voronoiCellStroke(255);
    voronoiSiteStroke(255);
    voronoiSiteFlag(false);

    // Make controls
    controls = makeControls()

    // Reset the cell values
    resetCells()


}

function draw() {
    // Get values from controls:
    let vals = {};
    controls.map(d => vals[d.id] = d.control.value());
    // draws for each frame
    background('rgba(100,100,100,1)');
    // draw voronoi
    voronoiDraw(0, 0, false, true);
    fill(255);
    stroke(255, 255, 255);
    // perlin noise loop for outer shape
    beginShape();
    vertex(0, 0);
    vertex(0, height);
    vertex(width, height);
    vertex(width, 0);
    beginContour();
    for (let a = 0; a < TWO_PI; a += TWO_PI / vals.radiusDivisions) {
        // loops through angles of circle
        let xoff = map(cos(a), -1, 1, 0, vals.minRadius / vals.perlinVariability);
        let yoff = map(sin(a), -1, 1, 0, vals.minRadius / vals.perlinVariability);
        // map radius to between min and max radii
        let radius = map(noise(xoff, yoff), 0, 1, vals.minRadius, vals.maxRadius);
        let x = radius * cos(a);
        let y = radius * sin(a);
        // adds new vertex to the circle at mapped radius
        vertex(x + width / 2, y + height / 2)
    }
    endContour(CLOSE);
    endShape();
}

