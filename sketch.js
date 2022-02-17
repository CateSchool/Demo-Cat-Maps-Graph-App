let cate;
let pointSize = 30;
let graph = new Graph();
let shortPath = [];
let factor = 1;
let startPoint;
let endPoint;
let cnv;

function preload() {
    cate = loadImage("assets/cate.png");
}

function setup() {
    document.getElementById("totalDistance").innerHTML = "N/A";

    changeFactor();

    cnv = createCanvas(cate.width * factor, cate.height * factor);
    cnv.parent('sketch');
    
    textSize(max(12, factor * 30));

    initGraph();
}

function windowResized() {
    changeFactor();
    cnv = resizeCanvas(cate.width * factor, cate.height * factor);

    document.getElementById("totalDistance").innerHTML = "N/A";

    graph = new Graph();
    initGraph();
    getTravel();
}

function draw() {
    background(220);

    image(cate, 0, 0, cate.width * factor, cate.height * factor);

    graph.displayEdges();
    graph.displayNodes();
    graph.lightPath(shortPath);
}


function getTravel() {
    if (startPoint != null && endPoint != null) {
        shortPath = graph.findShortestPath(startPoint, endPoint);
        document.getElementById("totalDistance").innerHTML = round(endPoint.distance) + " m";
    }
    else {
        shortPath = [];
        document.getElementById("totalDistance").innerHTML = "N/A";
    }
}

function initGraph() {
    let tempPoints = [];

    for (let i = 0; i < points.length; i++) {
        tempPoints[i] = {...points[i]};
    }

    tempPoints.forEach(item => {
        item.x *= factor;
        item.y *= factor;
    });

    graph.addEdge(tempPoints[47], tempPoints[48]);
    graph.addEdge(tempPoints[48], tempPoints[7]);
    graph.addEdge(tempPoints[48], tempPoints[10]);
    graph.addEdge(tempPoints[48], tempPoints[11]);
    graph.addEdge(tempPoints[49], tempPoints[6]);
    graph.addEdge(tempPoints[49], tempPoints[3]);
    graph.addEdge(tempPoints[49], tempPoints[7]);
    graph.addEdge(tempPoints[50], tempPoints[6]);
    graph.addEdge(tempPoints[50], tempPoints[2]);
    graph.addEdge(tempPoints[51], tempPoints[6]);
    graph.addEdge(tempPoints[51], tempPoints[8]);
    graph.addEdge(tempPoints[52], tempPoints[26]);
    graph.addEdge(tempPoints[52], tempPoints[22]);
    graph.addEdge(tempPoints[52], tempPoints[16]);
    graph.addEdge(tempPoints[53], tempPoints[2]);
    graph.addEdge(tempPoints[54], tempPoints[0]);
    graph.addEdge(tempPoints[55], tempPoints[4]);
    graph.addEdge(tempPoints[0], tempPoints[1]);
    graph.addEdge(tempPoints[0], tempPoints[4]);
    graph.addEdge(tempPoints[1], tempPoints[5]);
    graph.addEdge(tempPoints[1], tempPoints[2]);
    graph.addEdge(tempPoints[3], tempPoints[2]);
    graph.addEdge(tempPoints[4], tempPoints[5]);
    graph.addEdge(tempPoints[4], tempPoints[14]);
    graph.addEdge(tempPoints[5], tempPoints[6]);
    graph.addEdge(tempPoints[6], tempPoints[7]);
    graph.addEdge(tempPoints[7], tempPoints[9]);
    graph.addEdge(tempPoints[8], tempPoints[15]);
    graph.addEdge(tempPoints[9], tempPoints[10]);
    graph.addEdge(tempPoints[9], tempPoints[17]);
    graph.addEdge(tempPoints[10], tempPoints[11]);
    graph.addEdge(tempPoints[10], tempPoints[18]);
    graph.addEdge(tempPoints[11], tempPoints[12]);
    graph.addEdge(tempPoints[11], tempPoints[20]);
    graph.addEdge(tempPoints[12], tempPoints[20]);
    graph.addEdge(tempPoints[12], tempPoints[13]);
    graph.addEdge(tempPoints[13], tempPoints[21]);
    graph.addEdge(tempPoints[14], tempPoints[15]);
    graph.addEdge(tempPoints[14], tempPoints[22]);
    graph.addEdge(tempPoints[15], tempPoints[16]);
    graph.addEdge(tempPoints[16], tempPoints[17]);
    graph.addEdge(tempPoints[17], tempPoints[18]);
    graph.addEdge(tempPoints[17], tempPoints[26]);
    graph.addEdge(tempPoints[18], tempPoints[19]);
    graph.addEdge(tempPoints[18], tempPoints[20]);
    graph.addEdge(tempPoints[20], tempPoints[23]);
    graph.addEdge(tempPoints[21], tempPoints[24]);
    graph.addEdge(tempPoints[22], tempPoints[31]);
    graph.addEdge(tempPoints[23], tempPoints[25]);
    graph.addEdge(tempPoints[23], tempPoints[24]);
    graph.addEdge(tempPoints[24], tempPoints[29]);
    graph.addEdge(tempPoints[25], tempPoints[28]);
    graph.addEdge(tempPoints[25], tempPoints[27]);
    graph.addEdge(tempPoints[26], tempPoints[33]);
    graph.addEdge(tempPoints[26], tempPoints[27]);
    graph.addEdge(tempPoints[27], tempPoints[38]);
    graph.addEdge(tempPoints[28], tempPoints[29]);
    graph.addEdge(tempPoints[28], tempPoints[30]);
    graph.addEdge(tempPoints[29], tempPoints[40]);
    graph.addEdge(tempPoints[30], tempPoints[34]);
    graph.addEdge(tempPoints[30], tempPoints[35]);
    graph.addEdge(tempPoints[31], tempPoints[32]);
    graph.addEdge(tempPoints[32], tempPoints[33]);
    graph.addEdge(tempPoints[32], tempPoints[36]);
    graph.addEdge(tempPoints[33], tempPoints[37]);
    graph.addEdge(tempPoints[34], tempPoints[35]);
    graph.addEdge(tempPoints[34], tempPoints[38]);
    graph.addEdge(tempPoints[35], tempPoints[39]);
    graph.addEdge(tempPoints[37], tempPoints[38]);
    graph.addEdge(tempPoints[38], tempPoints[39]);
    graph.addEdge(tempPoints[38], tempPoints[41]);
    graph.addEdge(tempPoints[39], tempPoints[41]);
    graph.addEdge(tempPoints[39], tempPoints[42]);
    graph.addEdge(tempPoints[39], tempPoints[40]);
    graph.addEdge(tempPoints[39], tempPoints[43]);
    graph.addEdge(tempPoints[40], tempPoints[43]);
    graph.addEdge(tempPoints[42], tempPoints[43]);
    graph.addEdge(tempPoints[43], tempPoints[44]);
    graph.addEdge(tempPoints[44], tempPoints[45]);
    graph.addEdge(tempPoints[45], tempPoints[46]);

    if (startPoint != null) {
        startPoint = graph.nodes.get(tempPoints[startPoint.id]);
        startPoint.isPressed = true;
    }
    if (endPoint != null) {
        endPoint = graph.nodes.get(tempPoints[endPoint.id]);
        endPoint.isPressed = true;
    }
}

function mousePressed() {
    let clickedPoint;
    graph.nodes.forEach(node => {
        if (dist(mouseX, mouseY, node.x, node.y) < pointSize/2*factor) {
            clickedPoint = node;
            return;
        }
    });

    if (!clickedPoint) {
        resetClickedPoints();
    }
    else if (!startPoint) {
        newStartPoint(clickedPoint);
    }
    else if (!endPoint) {
        newEndPoint(clickedPoint);
    }
    else {
        // there was an endpoint, restart search
        newStartPoint(clickedPoint);
    }

    getTravel();
}


function resetClickedPoints() {
    if (startPoint) {
        startPoint.isPressed = false;
        startPoint = null;
    }
    if (endPoint) {
        endPoint.isPressed = false;
        endPoint = null;
    }
}

function newStartPoint(clickedPoint) {
    resetClickedPoints();
    clickedPoint.isPressed = true;
    startPoint = clickedPoint;
}

function newEndPoint(clickedPoint) {
    clickedPoint.isPressed = true;
    endPoint = clickedPoint;
}

function changeFactor() {
    if (windowHeight < windowWidth) {
        factor = (windowHeight-150)/cate.height;
    }
    else {
        factor = (windowWidth)/cate.width*7/8;
    }
    console.log(factor);
}
