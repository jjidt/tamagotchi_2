describe("Tamagotchi", function(){
  describe("initialize", function(){
    it("sets the name and a few other properties", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.name.should.equal("lil dragon");
      myPet.foodLevel.should.equal(10);
      myPet.sleepLevel.should.equal(10);
      myPet.activityLevel.should.equal(10);
    });
  });

  describe("timePasses", function(){
    it("decreases the amount of food the Tamogatchi has left by 1", function(){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.timePasses();
      myPet.foodLevel.should.equal(9);
    });
    it("decreases the amount of sleep the Tamogatchi has left by 1", function(){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.timePasses();
      myPet.sleepLevel.should.equal(9);
    });
    it("decreases the amount of activity the Tamogatchi has left by 1", function(){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.timePasses();
      myPet.activityLevel.should.equal(9);
    });
  });

  describe("isAlive", function(){
    it("is alive if the food level is above 0", function(){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.isAlive().should.equal(true);
    });
    it("is dead if the food level is 0", function(){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.foodLevel = 0;
      myPet.isAlive().should.equal(false);
    });
    it("is dead if the sleep level is 0", function(){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.sleepLevel = 0;
      myPet.isAlive().should.equal(false);
    });
    it("is dead if the activity level is 0", function(){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("lil dragon");
      myPet.activityLevel = 0;
      myPet.isAlive().should.equal(false);
    })
  });
});

describe("Level", function(){
  describe("initialize", function(){
    it("sets the amount of combo blocks for the level", function(){
      var levelTest = Object.create(Level);
      levelTest.initialize([2,3,4]);
      levelTest.red.should.equal(2);
      levelTest.blue.should.equal(3);
      levelTest.yellow.should.equal(4);
    });
  });
  describe("redDown", function() {
    it("decreases the amount of red blocks by one", function() {
      var levelTest = Object.create(Level);
      levelTest.initialize([2,3,4]);
      levelTest.redDown();
      levelTest.red.should.equal(1);
    });
  });
  describe("blueDown", function() {
    it("decreases the amount of blue blocks by one", function() {
      var levelTest = Object.create(Level);
      levelTest.initialize([2,3,4]);
      levelTest.blueDown();
      levelTest.blue.should.equal(2);
    });
  });
  describe("yellowDown", function() {
    it("decreases the amount of yellow blocks by one", function () {
      var levelTest = Object.create(Level);
      levelTest.initialize([2,3,4]);
      levelTest.yellowDown();
      levelTest.yellow.should.equal(3);
    });
  });
  describe("winCheck", function() {
    it("checks to see if the level was passed", function() {
      var levelTest = Object.create(Level);
      levelTest.initialize([0,0,0]);
      levelTest.winCheck().should.equal(true);
    });
    it("checks to see if the level was not passed", function() {
      var levelTest = Object.create(Level);
      levelTest.initialize([3,3,3]);
      levelTest.winCheck().should.equal(false);
    });
  });
});
