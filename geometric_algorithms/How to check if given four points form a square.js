// https://www.geeksforgeeks.org/check-given-four-points-form-square/

// returns square of distance between points
function distanceBetweenPoints(p1,p2){
    if(p1 == undefined || p2 == undefined || !Array.isArray(p1) || !Array.isArray(p2) || p1.length < 2 || p2.length < 2 || p1.length > 4 || p2.length > 4 ){
        throw new Error("please pass valid points. Make sure that they are in [x,y] fromat");
    }
    return Math.pow((p1[0] - p2[0]),2) + Math.pow((p1[1] - p2[1]),2);
}
function isSquare(points){
    if(points == undefined || points.length !== 4){
        throw new Error("please pass four points");
    }
    const [p1,p2,p3,p4] = points;
    const d2 = distanceBetweenPoints(p1,p2);
    const d3 = distanceBetweenPoints(p1,p3);
    const d4 = distanceBetweenPoints(p1,p4);
    if(d2 == d3 && d4 == 2 * d2 && distanceBetweenPoints(p2,p3) == 2 * d2 ){
        return true;
    }
    else if(d2 == d4 && d3 == 2 * d2 && distanceBetweenPoints(p2,p4) == 2 * d2 ){
        return true;
    }
    else if(d3 == d4 && d2 == 2 * d3 && distanceBetweenPoints(p3,p4) == 2 * d3 ){
        return true;
    }
    return false;
}

console.log(isSquare([[20, 10],[10, 20],[20, 20],[10, 10]]));