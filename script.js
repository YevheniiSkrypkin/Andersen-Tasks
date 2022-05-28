class Car {
  #brand = 'Audi';
  #model = 'A5';
  #yearOfManufacturing = '2020';
  #maxSpeed = 250;
  #maxFuelVolume = 20;
  #fuelConsumption = 10;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  start() {
    if(this.#isStarted === true) {
      throw new Error('Машина уже заведена');
    };
    
    return this.#isStarted = true;
  };

  
  shutDownEngine() {
    if(this.#isStarted === false) {
      throw new Error('Машина ещё не заведена');
    };

    return this.#isStarted = false;
  };

  fillUpGasTank(volume) {
    if (isNaN(volume) || volume <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    };

    if (volume+this.#currentFuelVolume > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    };

    return this.#currentFuelVolume += volume;
  };

  drive(speed, hours) {
    if (isNaN(speed) || speed <= 0) {
      throw new Error ('Неверная скорость');
    };

    if (isNaN(hours) || hours <= 0) {
      throw new Error('Неверное количество часов');
    };

    if(speed > this.#maxSpeed) {
      throw new Error ('Машина не может ехать так быстро');
    };

    if (this.#isStarted === false) {
      throw new Error ('Машина должна быть заведена, чтобы ехать');
    };

    const distance = speed * hours;
    const fuelConsumed = distance / this.#fuelConsumption;
    
    if (fuelConsumed > this.#currentFuelVolume) {
      throw new Error ('Недостаточно топлива')
    };

    return this.#mileage += distance, this.#currentFuelVolume = this.#currentFuelVolume - fuelConsumed;
  };


  set brand(brandName) {
    if (typeof brandName !== 'string' || brandName.length < 1 || brandName.length > 50) {
      throw new Error ('Name of brand is not valid');
    };

    return this.#brand = brandName;
  };

  get brand() {
    return this.#brand;
  };


  set model (modelName) {
    if (typeof modelName !== 'string' || modelName.length < 1 || modelName.length > 50) {
      throw new Error ('Name of model is not valid');
    };

    return this.#model = modelName;
  };

  get model () {
    return this.#model;
  };


  set yearOfManufacturing (yearOfMan) {
    if (typeof yearOfMan !== 'number' || yearOfMan < 1900 || yearOfMan > new Date().getFullYear() ) {
      throw new Error ('Year of manufacturing is not valid');
    };

    return this.#yearOfManufacturing = yearOfMan;
  };

  get yearOfManufacturing () {
    return this.#yearOfManufacturing;
  };


  set maxSpeed (maxSpeed) {
    if (typeof maxSpeed !== 'number' || maxSpeed < 100 || maxSpeed > 300 ) {
      throw new Error ('Max speed is not valid');
    };

    return this.#maxSpeed = maxSpeed;
  };

  get maxSpeed () {
    return this.#maxSpeed;
  };

  set maxFuelVolume (maxFuelVolume) {
    if (typeof maxFuelVolume !== 'number' || maxFuelVolume < 5 || maxFuelVolume > 20 ) {
      throw new Error ('Max speed is not valid');
    };

    return this.#maxFuelVolume = maxFuelVolume;
  };

  get maxFuelVolume () {
    return this.#maxFuelVolume;
  };


  set fuelConsumption (fuelConsumption ) {
    if(typeof fuelConsumption  !== 'number') {
      throw new Error ('Max speed is not valid');
    };

    return this.#fuelConsumption = fuelConsumption;
  };

  get fuelConsumption  () {
    return this.#fuelConsumption ;
  };

  get currentFuelVolume  () {
    return this.#currentFuelVolume ;
  };

  get isStarted () {
    return this.#isStarted;
  };

  get mileage () {
    return this.#mileage;
  };
}
