const totalAscent = calculateAscent();
const totalTime = calculateTime();
const totalDistance = calculateDistance();

calculateAscent();
calculateTime();
calculateDistance();

const pace = total / 60 / totalDistance;

function calculateAscent() {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += (verticalChange > 0) ? verticalChange : 0;
  }

  return result;
}

function calculateDistance() {

}

function calculateTime() {

}