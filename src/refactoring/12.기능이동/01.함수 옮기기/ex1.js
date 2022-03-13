// 중첩 함수
function trackSummary(points) {
  const tatalTime = calculateItme();
  const totalDistance = calculateDistance();
  const pace = tatalTime / 60 / totalDistance;

  return {
    titme: tatalTime,
    distance: totalDistance,
    pace: pace
  }

  function calculateDistance() {
    let result = 0;

    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i])
    }

    return result;
  }
}
