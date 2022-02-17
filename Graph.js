class Graph {
    
    constructor() {
        this.nodes = new Map();
    }

    addEdge(source, destination) {  
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);

        sourceNode.addAdjacent(destinationNode); 

        destinationNode.addAdjacent(sourceNode);

        return [sourceNode, destinationNode];
    }

    displayEdges(factor=1) { 
        this.nodes.forEach(node => {
            for (const adj of node.getAdjacents()) {
                stroke(130, 247, 255);
                strokeWeight(3);
                line(node.x, node.y, adj.x, adj.y);
            }
        });
    }

    displayNodes() { 
        this.nodes.forEach(node => {
            node.display();
        });
    }

    addVertex(value) {
        if (this.nodes.has(value)) {
            return this.nodes.get(value);
        } else {
            const vertex = new Node(value);
            this.nodes.set(value, vertex);
            return vertex;
        }
    }

    removeVertex(value) {
        const current = this.nodes.get(value);
        if (current) {
            for (const node of this.nodes.values()) {
                node.removeAdjacent(current);
            }
        }
        return this.nodes.delete(value);
    }

    removeEdge(source, destination) {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);

        if (sourceNode && destinationNode) {
            sourceNode.removeAdjacent(destinationNode);
            destinationNode.removeAdjacent(sourceNode);
        }

        return [sourceNode, destinationNode];
    }
    
    lightPath(path) {
        for (let i = 0; i < path.length - 1; i++) {
            this.drawLine(path[i], path[i+1], true);
        }
    }
  
    drawLine(p1, p2, displayDist=false) {
        stroke(255, 130, 226);
        strokeWeight(3);
        line(p1.x, p1.y, p2.x, p2.y);
        
        if(displayDist) {
            let avX = (p1.x + p2.x)/2;
            let avY = (p1.y + p2.y)/2;
            let d = round(getDistanceMeters(p1, p2)) + "m";

            stroke(0);
            fill(255, 255, 0);
            text(d, avX, avY);
        }
    }
    
    findShortestPath(p1, p2) {
        let notChecked = [];
        this.nodes.forEach(node => {
            node.pathTaken = [];
            node.distance = Infinity;
            notChecked.push(node);
        });

        p1.distance = 0;

        while (notChecked.length != 0) {
            let currentPoint = this.leastDistNode(notChecked);

            if (currentPoint == p2) {
                break;
            }

            currentPoint.adjacents.forEach(adjacent => {
                if (notChecked.includes(adjacent)) {
                    let tempDist = currentPoint.distance + getDistanceMeters(currentPoint, adjacent);
                    if (tempDist < adjacent.distance) {
                        adjacent.pathTaken = [...currentPoint.pathTaken];
                        adjacent.pathTaken.push(currentPoint);
                        adjacent.distance = tempDist;
                    }
                }
            });

            notChecked = notChecked.filter(item => item !== currentPoint);
        }

        return [...p2.pathTaken, p2];
    }

    leastDistNode(array) {
        let min = array[0];
        array.forEach(node => {
            if (node.distance < min.distance) {
                min = node;
            }
        });
        return min;
    }
}
