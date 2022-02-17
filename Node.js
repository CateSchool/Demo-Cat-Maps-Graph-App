class Node {

    constructor({ type, id, x, y, name = "" }) {
        this.type = type;
        this.id = id;
        this.x = x;
        this.y = y;
        this.name = name;
        this.isPressed = false;
        this.adjacents = [];        // adjacency list remove
        this.distance = Infinity;   // remove
        this.pathTaken = [];        // remove
    }

    display() {
        stroke(0);
        strokeWeight(1);
        if (this.isPressed) {
            fill(255, 130, 226);
            ellipse(this.x, this.y, pointSize * factor);
            stroke(0);
            text(this.name, this.x, this.y - 3);
        }
        else {
            fill(0, 255, 100);
            ellipse(this.x, this.y, pointSize * factor);
            stroke(0);
            fill(255, 255, 0);
            text(this.name, this.x, this.y - 3);
        }
    }

    // Where is this used? What does this do?
    addAdjacent(node) {
        this.adjacents.push(node);
    }

    removeAdjacent(node) {
        const index = this.adjacents.find(adj => (adj.id === node.id && adj.type === node.type));
        console.log(index);
        if (index > -1) {
            this.adjacents.splice(index, 1);
            return node;
        }
    }

    // You could also get this through Node.adjacents
    getAdjacents() { 
        return this.adjacents;
    }

    isAdjacent(node) {
        return this.adjacents.indexOf(node) > -1;
    }
}
