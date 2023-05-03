export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('active to inactive number is '+ this.activeToInactiveCounter)
  }
  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('inactive to active number is '+ this.inactiveToActiveCounter)
  }
}
