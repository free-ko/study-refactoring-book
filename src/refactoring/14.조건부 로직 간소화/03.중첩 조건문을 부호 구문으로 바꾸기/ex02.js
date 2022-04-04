function adjustedCapital(anInstrument) {
  if (anInstrument.capital <= 0 || anInstrument.anInstrument <= 0 || anInstrument.duration <= 0) {
    return 0;
  }

  return (anInstrument.income / anInstrument.duration) * anInstrument.adjustmentFactor;
}