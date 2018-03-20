export class HungryBear {

  constructor() {
    this.foodLevel = 15;
    this.moodLevel = 15;
    this.sleepLevel = 15;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
  setMood() {
    setInterval(() => {
      this.moodLevel--;
    }, 1000);
  }
  setSleep() {
    setInterval(() => {
      this.sleepLevel--;
    }, 1000);
  }

  didYouGetEaten() {
    if (this.foodLevel <= 0) {
      return true;
    } else if (this.moodLevel <= 0) {
      return true;
    } else if (this.sleepLevel <= 0) {
      return true;
    } else {
      return false;
    }
  }

  feed() {
    this.foodLevel = 15;
  }
  play() {
    this.moodLevel = 15;
  }
  sleep() {
    this.sleepLevel = 15;
  }

  toggleDiv(action){
    let x = document.getElementById(action).style;
      if(x.display == 'none' || x.display == ''){
        x.display = 'block';
      }else{
        x.display = 'none';
      }

    }

  }
