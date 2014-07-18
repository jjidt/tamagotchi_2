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

var Level = {
  initialize: function(arr) {
    this.red = arr[0];
    this.blue = arr[1];
    this.yellow = arr[2];
  },
  redDown: function() {
    this.red -= 1;
  },
  blueDown: function() {
    this.blue -= 1;
  },
  yellowDown: function() {
    this.yellow -= 1;
  },
  winCheck: function() {
    return this.red < 1  && this.blue < 1 && this.yellow < 1;
  }
}

$(document).ready(function() {
  var myTamagotchi = Object.create(Tamagotchi);
  myTamagotchi.initialize("lil dragon");

  var currentLevel = 0;
  var levelAmounts = [[3,3,3],[4,4,4,],[4,7,8]];
  var newLevel = Object.create(Level);
  newLevel.initialize(levelAmounts[currentLevel]);

  var speed = 1000;

  var displayBlock = function() {
    $(".red").text(newLevel.red);
    $(".blue").text(newLevel.blue);
    $(".yellow").text(newLevel.yellow);
  };

  displayBlock();


  newLevel.initialize(levelAmounts[currentLevel]);

  $("#text-input").focus();
  $(document).click(function(){
    $("#text-input").focus();
  })


  $("form#user-type").submit(function(event) {
    event.preventDefault();

    var inputtedCommand = $("input#text-input").val();

    if (inputtedCommand === "eat") {
      myTamagotchi.foodLevel += 10;
    } else if (inputtedCommand === "sleep") {
      myTamagotchi.sleepLevel += 10;
    } else if (inputtedCommand === "run") {
      myTamagotchi.activityLevel += 10;
    } else if (inputtedCommand === "midnight snack") {
      newLevel.red -= 1;
      myTamagotchi.foodLevel -= 10;
      myTamagotchi.sleepLevel -= 10;
      displayBlock();
    } else if (inputtedCommand === "food fight") {
      newLevel.blue -= 1;
      myTamagotchi.foodLevel -= 10;
      myTamagotchi.activityLevel -= 10;
      displayBlock();
    } else if (inputtedCommand === "sleep walk") {
      newLevel.yellow -= 1;
      myTamagotchi.sleepLevel -= 10;
      myTamagotchi.activityLevel -= 10;
      displayBlock();
    }

    if (newLevel.winCheck()){
      currentLevel += 1;
      speed -= 200;
      myTamagotchi.initialize("lil dragon");
      newLevel.initialize(levelAmounts[currentLevel]);
      displayBlock();
    }

    $("#food").text(myTamagotchi.foodLevel);
    $("#sleep").text(myTamagotchi.sleepLevel);
    $("#activity").text(myTamagotchi.activityLevel);

    $("input#text-input").val("");
  })
    var interval =  function() {if(myTamagotchi.isAlive()){
                    myTamagotchi.timePasses();
                    $("#food").text(myTamagotchi.foodLevel);
                    $("#sleep").text(myTamagotchi.sleepLevel);
                    $("#activity").text(myTamagotchi.activityLevel);
                  } else {
                    //alert("You are dead");
                    clearInterval(timer);
                  }
                };

    var timer;
    (function repeat() {
      interval();
      timer = setTimeout(repeat, speed);
    })();

})

//combinations -
