function distance( {x:x1, y:y1}, {x:x2, y:y2}) {
    const dx = Math.abs( Math.round(x1) - Math.round(x2) )
    const dy = Math.abs( Math.round(y1) - Math.round(y2) )
    return dx + dy;
}

function findNearestDeliveryPoint(agent, deliveryPoints) {
    let nearest = deliveryPoints.reduce((prev, curr) => {
        
        let prevDistance = distance({x: prev.x, y: prev.y}, agent);
        let currDistance = distance({x: curr.x, y: curr.y}, agent);
        

        // console.log("other agent pos", myAgent.pretty )
        // check if the [prev.x, prev.y] is into other_agent


        // if ((other_agent).contains([prev.x, prev.y])){
        //     occupied[0] = true
        // }
        // if ((other_agent).contains([curr.x, curr.y])){
        //     occupied[1] = true
        // }
        // if (occupied[0] && occupied[1]){
        //     return prevDistance < currDistance ? prev : curr;
        // }
        
        // return (occupied[0]) ? curr : prev;
        return prevDistance < currDistance ? prev : curr;
    });
    return nearest;
}

function isValidPosition(myX, myY, map) {
    let found = false;
    if (myX >= 0 && myX < map.width && myY >= 0 && myY < map.height){
        map.coords.forEach((row) => {
            if (row.x === myX && row.y === myY) {
                found = true;
            }
        });
    } 
    return found;
}

function findPointsAtDistance() {
    const distance = 5;
    const points = [];

    // Considera tutte le combinazioni di spostamenti in x e y che sommano a 5
    for (let dx = -distance; dx <= distance; dx++) {
        let dy = distance - Math.abs(dx);
        points.push({x: me.x + dx, y: me.y + dy});
        if (dy !== 0) { // Aggiungi il punto simmetrico se dy non è zero
            points.push({x: me.x + dx, y: me.y - dy});
        }
    }

    // Filtra i punti per assicurarsi che siano all'interno dei limiti della mappa
    return points.filter(point => isValidPosition(point.x, point.y, mmap));
}

export { distance, findNearestDeliveryPoint, isValidPosition, findPointsAtDistance};