// https://www.geeksforgeeks.org/check-four-segments-form-rectangle/

// returns square of distance between points
function distanceBetweenPoints(p1,p2){
    if(p1 == undefined || p2 == undefined || !Array.isArray(p1) || !Array.isArray(p2) || p1.length < 2 || p2.length < 2 || p1.length > 4 || p2.length > 4 ){
        throw new Error("please pass valid points. Make sure that they are in [x,y] fromat");
    }
    return Math.pow((p1[0] - p2[0]),2) + Math.pow((p1[1] - p2[1]),2);
}

function canFormRectangle(segments){
    const points = [];
    segments.forEach( segment => {
        points.push(...segment);
    });
    const found = new Set();
    const finalPoints = points.filter(
        point => found.has(JSON.stringify(point)) ? false : found.add(JSON.stringify(point))
    )
    if(finalPoints.length != 4){
        return false;
    }
    const distances = [];
    for(let i = 1; i < 4; i++){
        distances.push(distanceBetweenPoints(finalPoints[0],finalPoints[i]));
    }
    distances.sort( (a,b) => ( a === b ? 0 : ( a > b ? 1 : -1 ) ) );
    console.log(distances);
    return distances[2] === distances[0] + distances[1]
}

console.log(canFormRectangle([
    [[4, 2],[7, 5]],
    [[2, 4],[4, 2]],
    [[2, 4],[5, 7]],
    [[5, 7],[7, 5]]
]));

console.log(canFormRectangle([
    [[7, 0],[10, 0]],
    [[7, 0],[7, 3]],
    [[7, 3],[10, 2]],
    [[10, 2],[10, 0]]
]));