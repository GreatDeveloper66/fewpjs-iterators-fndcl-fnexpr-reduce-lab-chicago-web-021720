const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// Code your solution here
Array.prototype.sum = function() {
  return this.reduce((a,b) => a + b, 0);
};
const totalBatteries = batteryBatches.sum();
