function deliveryDate(anOrder, isRush) {
  if (isRush) {
    let deliveryTime;

    if (["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;

    return anOrder.placeOn.plusDays(1 + deliveryTime);
  } else {
    let deliveryTime;

    if (["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;

    return anOrder.placeOn.plusDays(2 + deliveryTime);
  }
}

// 호출
// 2번째 인자 true가 무엇을 의미하는지 모르는 문제 발생(플래그 인수)
aShipment.deliveryDate = deliveryDate(anOrder, true);   
