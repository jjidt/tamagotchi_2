var Tamagotchi = {
  initialize: function(name) {
    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },

  timePasses: function() {
    this.foodLevel -= 1;
    this.sleepLevel -= 1;
    this.activityLevel -= 1;
  },

  isAlive: function() {
    return this.foodLevel > 0 && this.sleepLevel > 0 && this.activityLevel > 0;
    }
}

$(document).ready(function() {
  var myTamagotchi = Object.create(Tamagotchi);
  myTamagotchi.initialize("lil dragon");

  $("form#user-type").submit(function(event) {
    event.preventDefault();

    var inputtedCommand = $("input#text-input").val();

    if (inputtedCommand === "eat") {
      myTamagotchi.foodLevel += 10;
    } else if (inputtedCommand === "sleep") {
      myTamagotchi.sleepLevel += 10;
    } else if (inputtedCommand === "run") {
      myTamagotchi.activityLevel += 10;
    }

    $("#food").text(myTamagotchi.foodLevel);
    $("#sleep").text(myTamagotchi.sleepLevel);
    $("#activity").text(myTamagotchi.activityLevel);

    $("input#text-input").val("");
  })
    setInterval(function() {
      if(myTamagotchi.isAlive()){
        myTamagotchi.timePasses();
        $("#food").text(myTamagotchi.foodLevel);
        $("#sleep").text(myTamagotchi.sleepLevel);
        $("#activity").text(myTamagotchi.activityLevel);
      }
    }, 1000);

    if(!myTamagotchi.isAlive()) {

    }
})

//combinations -
