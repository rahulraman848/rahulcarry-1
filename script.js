const slider = document.getElementById("range");
const output = document.getElementById("value");
output.innerHTML = slider.value;
const workoutType = document.getElementById("workout-type")
const strengths = document.getElementById("strengths")
const weakness = document.getElementById("weaknesses")

const workoutLabel = document.getElementById("workout-label");
const durationLabel = document.getElementById("duration-label");
const strengthLabel = document.getElementById("strength-label");
const weaknessLabel = document.getElementById("weakness-label");
const submitButton = document.getElementById("submit");
const countdown = document.getElementById("countdown");

const workoutResults = document.getElementById("workout-results")
const strengthResults = document.getElementById("strength-results")
const weaknessResults = document.getElementById("weakness-results")
const durationResults = document.getElementById("duration-results");
const minutesLabel = document.getElementById("minutes-label");

const errorMessage = document.getElementById("error-message")
errorMessage.style.visibility = "hidden";

const getReady = document.getElementById("getready")
const firstWeakness = document.getElementById("firstWeakness");
const firstRest = document.getElementById("firstRest");
const secondWeakness = document.getElementById("secondWeakness");
const secondRest = document.getElementById("secondRest");
const firstStrength = document.getElementById("firstStrength");
const thirdRest = document.getElementById("thirdRest");
const thirdWeakness = document.getElementById("thirdWeakness");
const fourthRest = document.getElementById("fourthRest");
const secondStrength = document.getElementById("secondStrength");
const cooldown = document.getElementById("cooldown");
const howManyTimes = document.getElementById("howManyTimes");
const workoutComplete = document.getElementById("workout-complete")

const timer = document.getElementById("timer");


firstWeakness.style.visibility = "hidden";
firstRest.style.visibility = "hidden";
secondWeakness.style.visibility = "hidden";
secondRest.style.visibility = "hidden";
firstStrength.style.visibility = "hidden";
thirdRest.style.visibility = "hidden";
thirdWeakness.style.visibility = "hidden";
fourthRest.style.visibility = "hidden";
secondStrength.style.visibility = "hidden";
cooldown.style.visibility = "hidden";
howManyTimes.style.visibility = "hidden";


getReady.style.visibility = "hidden";
workoutComplete.style.visibility = "hidden";
// Legs, Arms, Core, Chest, Forearms/Shoulders
let weightTrainingExercises = [
  ['Dumbbell Squat','Dumbbell Lift From Ground','Dumbbell Walk','Step Ups'],
  ['Bicep Curl','Sitting Dumbbell Raises','Zottman Curl (Reverse Grip Midway)','Cross-Body Curl'],
  ['Lying Down T','Bent-Over Barbell Raises','One-Arm Frontal Swing','Reverse Dumbbell Lunge'],
  ['Dumbbell Uppercut','Single Dumbbell Shoulder Raise','Lying Down Barbell Raises','Single-Leg Deadlift'],
  ['Plank Dumbbell Pullups','Dumbbell Bench Press','Dumbbell Shoulder Press','Dumbbell Spider Curl']
] 
let cardio = [
  ['Froggy Jumps','Squat Jumps','Toe Taps','Split Jumps'],
  ['Jump Ropes', 'Burpees', 'Jumping Jacks', 'Resistance Band Upward Pulls'],
  ['Mountain Climbers','Side Lunge','Bear Crawl', 'Situps'],
  ['Punches','Cross-Body Mountain Climbers','Push-ups','Short Sprint'],
  ['Downward Dog Push Ups','Arm Circles','Upward Cable Raises','Diamond Push-ups']
]
let flexibilityTrainingExercise = [
  ['Perpendicular Leg Raise (Hamstring)', 'Lying Quad Stretch', 'Calf Stretch', 'Standing Quad Stretch'],
  ['Tricep Stretch', 'Childs Pose', 'Long Arm Stretches', 'Standing Arm Swings'],
  ['Lunges', 'Butterfly Stretch', 'Hip Circles', 'Side Bends'],
  ['Standing Chest Stretch', 'Trunk Lift (Look up while lying on stomach)', 'Chin to Chest Stretch', 'Knees to Chest'],
  ['Hip Crossover (Lying Down)', 'Gluetal Stretch','Shoulder Stretch', 'Shoulder CARS (Arm Circles Reverse Midway)']
]

slider.oninput = function() { //https://www.w3schools.com
  output.innerHTML = this.value;
}

function sleep(ms) { //https://www.sitepoint.com/delay-sleep-pause-wait/
  return new Promise(resolve => setTimeout(resolve, ms));
}


function readData() {
  if(strengths.value==weakness.value){
    errorMessage.style.visibility = "visible";
    errorMessage.textContent = `Your strengths and weaknesses are the same. Please try again.`;
  }
  else{
    errorMessage.style.visibility = "hidden";
    let workoutValue = workoutType.value;
    workoutResults.textContent = `Workout you've chosen: ${workoutValue}`;
    workoutType.remove();
    workoutLabel.remove();

    let strengthValue = strengths.value;
    strengthResults.textContent = `Your workout strength: ${strengthValue}`;
    strengths.remove();
    strengthLabel.remove();

    let weaknessValue = weakness.value;
    weaknessResults.textContent = `Your workout weakness: ${weaknessValue}`;
    weakness.remove();
    weaknessLabel.remove();

    let durationValue = output.innerHTML;
    durationResults.textContent = `Length of your workout: ${durationValue} minutes`;
    output.remove();
    slider.remove();
    minutesLabel.remove()
    durationLabel.remove();

    submitButton.remove();


    if(strengthValue != weaknessValue) {
      if(workoutValue=='Weight Training') {
        if(weaknessValue == "Legs") {
          let x = getRandomIndex(weightTrainingExercises,0)
          let y = getRandomWorkout(weightTrainingExercises,0, x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(weightTrainingExercises,0,x);
        }
        if(weaknessValue == "Arms") {
          let x = getRandomIndex(weightTrainingExercises,1)
          let y = getRandomWorkout(weightTrainingExercises,1,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(weightTrainingExercises,1,x);
        }
        if(weaknessValue == "Core") {
          let x = getRandomIndex(weightTrainingExercises,2)
          let y = getRandomWorkout(weightTrainingExercises,2,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(weightTrainingExercises,2,x);
        }
        if(weaknessValue == "Chest") {
          let x = getRandomIndex(weightTrainingExercises,3)
          let y = getRandomWorkout(weightTrainingExercises,3,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(weightTrainingExercises,3,x);
        }
        if(weaknessValue == "Forearms and Shoulders") {
          let x = getRandomIndex(weightTrainingExercises,4)
          let y = getRandomWorkout(weightTrainingExercises,4,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(weightTrainingExercises,4,x);
        }

        firstRest.textContent = 'Rest (10s)';

        if(weaknessValue == "Legs") {
          let x = getRandomIndex(weightTrainingExercises,0)
          let y = getRandomWorkout(weightTrainingExercises,0,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(weightTrainingExercises,0,x);
        }
        if(weaknessValue == "Arms") {
          let x = getRandomIndex(weightTrainingExercises,1)
          let y = getRandomWorkout(weightTrainingExercises,1,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(weightTrainingExercises,1,x);
        }
        if(weaknessValue == "Core") {
          let x = getRandomIndex(weightTrainingExercises,2)
          let y = getRandomWorkout(weightTrainingExercises,2,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(weightTrainingExercises,2,x);
        }
        if(weaknessValue == "Chest") {
          let x = getRandomIndex(weightTrainingExercises,3)
          let y = getRandomWorkout(weightTrainingExercises,3,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(weightTrainingExercises,3,x);
        }
        if(weaknessValue == "Forearms and Shoulders") {
          let x = getRandomIndex(weightTrainingExercises,4)
          let y = getRandomWorkout(weightTrainingExercises,4,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(weightTrainingExercises,4,x);
        }

        secondRest.textContent = 'Rest (10s)';

        if(strengthValue == "Legs") {
          let x = getRandomIndex(weightTrainingExercises, 0)
          let y = getRandomWorkout(weightTrainingExercises,0,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(weightTrainingExercises,0,x)
        }
        if(strengthValue == "Arms") {
          let x = getRandomIndex(weightTrainingExercises, 1)
          let y = getRandomWorkout(weightTrainingExercises,1,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(weightTrainingExercises,1,x)
        }
        if(strengthValue == "Core") {
          let x = getRandomIndex(weightTrainingExercises, 2)
          let y = getRandomWorkout(weightTrainingExercises,2,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(weightTrainingExercises,2,x)
        }
        if(strengthValue == "Chest") {
          let x = getRandomIndex(weightTrainingExercises, 3)
          let y = getRandomWorkout(weightTrainingExercises,3,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(weightTrainingExercises,3,x)
        }
        if(strengthValue == "Forearms and Shoulders") {
          let x = getRandomIndex(weightTrainingExercises, 4)
          let y = getRandomWorkout(weightTrainingExercises,4,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(weightTrainingExercises,4,x)
        }

        thirdRest.textContent = 'Rest (5s)';

        if(weaknessValue == "Legs") {
          let x = getRandomIndex(weightTrainingExercises, 0)
          let y = getRandomWorkout(weightTrainingExercises,0,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(weightTrainingExercises,0,x)
        }
        if(weaknessValue == "Arms") {
          let x = getRandomIndex(weightTrainingExercises, 1)
          let y = getRandomWorkout(weightTrainingExercises,1,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(weightTrainingExercises,1,x)
        }
        if(weaknessValue == "Core") {
          let x = getRandomIndex(weightTrainingExercises, 2)
          let y = getRandomWorkout(weightTrainingExercises,2,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(weightTrainingExercises,2,x)
        }
        if(weaknessValue == "Chest") {
          let x = getRandomIndex(weightTrainingExercises, 3)
          let y = getRandomWorkout(weightTrainingExercises,3,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(weightTrainingExercises,3,x)
        }
        if(weaknessValue == "Forearms and Shoulders") {
          let x = getRandomIndex(weightTrainingExercises, 4)
          let y = getRandomWorkout(weightTrainingExercises,4,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(weightTrainingExercises,4,x)
        }

        fourthRest.textContent = 'Rest (10s)';

        if(strengthValue == "Legs") {
          let x = getRandomIndex(weightTrainingExercises,0)
          let y = getRandomWorkout(weightTrainingExercises,0,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(weightTrainingExercises,0,x)
        }
        if(strengthValue == "Arms") {
          let x = getRandomIndex(weightTrainingExercises,1)
          let y = getRandomWorkout(weightTrainingExercises,1,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(weightTrainingExercises,1,x)
        }
        if(strengthValue == "Core") {
          let x = getRandomIndex(weightTrainingExercises,2)
          let y = getRandomWorkout(weightTrainingExercises,2,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(weightTrainingExercises,2,x)
        }
        if(strengthValue == "Chest") {
          let x = getRandomIndex(weightTrainingExercises,3)
          let y = getRandomWorkout(weightTrainingExercises,3,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(weightTrainingExercises,3,x)
        }
        if(strengthValue == "Forearms and Shoulders") {
          let x = getRandomIndex(weightTrainingExercises,4)
          let y = getRandomWorkout(weightTrainingExercises,4,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(weightTrainingExercises,4,x)
        }

        cooldown.textContent = 'Cooldown(25s)'

        howManyTimes.textContent = `Repetitions Left: ${durationValue/5}`;
      }
      if(workoutValue=='Cardio') {
        if(weaknessValue == "Legs") {
          let x = getRandomIndex(cardio,0)
          let y = getRandomWorkout(cardio,0,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(cardio,0,x);
       }
        if(weaknessValue == "Arms") {
          let x = getRandomIndex(cardio,1)
          let y = getRandomWorkout(cardio,1,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(cardio,1,x);
       }
        if(weaknessValue == "Core") {
          let x = getRandomIndex(cardio,2)
          let y = getRandomWorkout(cardio,2,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(cardio,2,x);
       }
        if(weaknessValue == "Chest") {
          let x = getRandomIndex(cardio,3)
          let y = getRandomWorkout(cardio,3,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(cardio,3,x);
      }
        if(weaknessValue == "Forearms and Shoulders") {
          let x = getRandomIndex(cardio,4)
          let y = getRandomWorkout(cardio,4,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(cardio,4,x);
        }

        firstRest.textContent = 'Rest (10s)';

        if(weaknessValue == "Legs") {
          let x = getRandomIndex(cardio,0)
          let y = getRandomWorkout(cardio,0,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(cardio,0,x);
       }
        if(weaknessValue == "Arms") {
          let x = getRandomIndex(cardio,1)
          let y = getRandomWorkout(cardio,1,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(cardio,1,x);
       }
        if(weaknessValue == "Core") {
          let x = getRandomIndex(cardio,2)
          let y = getRandomWorkout(cardio,2,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(cardio,2,x);
       }
        if(weaknessValue == "Chest") {
          let x = getRandomIndex(cardio,3)
          let y = getRandomWorkout(cardio,3,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(cardio,3,x);
      }
        if(weaknessValue == "Forearms and Shoulders") {
          let x = getRandomIndex(cardio,4)
          let y = getRandomWorkout(cardio,4,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(cardio,4,x);
        }

        secondRest.textContent = 'Rest (10s)';

        if(strengthValue == "Legs") {
          let x = getRandomIndex(cardio, 0)
          let y = getRandomWorkout(cardio,0,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(cardio,0,x)
       }
        if(strengthValue == "Arms") {
          let x = getRandomIndex(cardio, 1)
          let y = getRandomWorkout(cardio,1,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(cardio,1,x)
       }
        if(strengthValue == "Core") {
          let x = getRandomIndex(cardio, 2)
          let y = getRandomWorkout(cardio,2,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(cardio,2,x)
       }
        if(strengthValue == "Chest") {
          let x = getRandomIndex(cardio, 3)
          let y = getRandomWorkout(cardio,3,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(cardio,3,x)
      }
        if(strengthValue == "Forearms and Shoulders") {
          let x = getRandomIndex(cardio, 4)
          let y = getRandomWorkout(cardio,4,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(cardio,4,x)
        }

        thirdRest.textContent = 'Rest (10s)'

        if(weaknessValue == "Legs") {
          let x = getRandomIndex(cardio, 0)
          let y = getRandomWorkout(cardio,0,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(cardio,0,x)
       }
        if(weaknessValue == "Arms") {
          let x = getRandomIndex(cardio, 1)
          let y = getRandomWorkout(cardio,1,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(cardio,1,x)
       }
        if(weaknessValue == "Core") {
          let x = getRandomIndex(cardio, 2)
          let y = getRandomWorkout(cardio,2,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(cardio,2,x)
       }
        if(weaknessValue == "Chest") {
          let x = getRandomIndex(cardio, 3)
          let y = getRandomWorkout(cardio,3,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(cardio,3,x)
      }
        if(weaknessValue == "Forearms and Shoulders") {
          let x = getRandomIndex(cardio, 4)
          let y = getRandomWorkout(cardio,4,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(cardio,4,x)
        }


        fourthRest.textContent = 'Rest (10s)';

        if(strengthValue == "Legs") {
          let x = getRandomIndex(cardio,0)
          let y = getRandomWorkout(cardio,0,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(cardio,0,x)
       }
        if(strengthValue == "Arms") {
          let x = getRandomIndex(cardio,1)
          let y = getRandomWorkout(cardio,1,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(cardio,1,x)
       }
        if(strengthValue == "Core") {
          let x = getRandomIndex(cardio,2)
          let y = getRandomWorkout(cardio,2,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(cardio,2,x)
       }
        if(strengthValue == "Chest") {
          let x = getRandomIndex(cardio,3)
          let y = getRandomWorkout(cardio,3,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(cardio,3,x)
      }
        if(strengthValue == "Forearms and Shoulders") {
          let x = getRandomIndex(cardio,4)
          let y = getRandomWorkout(cardio,4,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(cardio,4,x)
        }

        cooldown.textContent = 'Cooldown(25s)'

        howManyTimes.textContent = `Repetitions Left: ${durationValue/5}`;
        
      }
      if(workoutValue=='Flexibility Training') {
        if(weaknessValue == "Legs") {
          let x = getRandomIndex(flexibilityTrainingExercise,0)
          let y = getRandomWorkout(flexibilityTrainingExercise,0,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(flexibilityTrainingExercise,0,x);
        }
        if(weaknessValue == "Arms") {
          let x = getRandomIndex(flexibilityTrainingExercise,1)
          let y = getRandomWorkout(flexibilityTrainingExercise,1,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(flexibilityTrainingExercise,1,x);
        }
        if(weaknessValue == "Core") {
          let x = getRandomIndex(flexibilityTrainingExercise,2)
          let y = getRandomWorkout(flexibilityTrainingExercise,2,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(flexibilityTrainingExercise,2,x);
        }
        if(weaknessValue == "Chest") {
          let x = getRandomIndex(flexibilityTrainingExercise,3)
          let y = getRandomWorkout(flexibilityTrainingExercise,3,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(flexibilityTrainingExercise,3,x);
        }
        if(weaknessValue == "Forearms and Shoulders") {
          let x = getRandomIndex(flexibilityTrainingExercise,4)
          let y = getRandomWorkout(flexibilityTrainingExercise,4,x)
          firstWeakness.textContent = `Weakness Exercise 1: ${y} (30s)`
          removeDuplicates(flexibilityTrainingExercise,4,x);
        }

        firstRest.textContent = 'Rest (10s)';

        if(weaknessValue == "Legs") {
          let x = getRandomIndex(flexibilityTrainingExercise,0)
          let y = getRandomWorkout(flexibilityTrainingExercise,0,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(flexibilityTrainingExercise,0,x);
        }
        if(weaknessValue == "Arms") {
          let x = getRandomIndex(flexibilityTrainingExercise,1)
          let y = getRandomWorkout(flexibilityTrainingExercise,1,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(flexibilityTrainingExercise,1,x);
        }
        if(weaknessValue == "Core") {
          let x = getRandomIndex(flexibilityTrainingExercise,2)
          let y = getRandomWorkout(flexibilityTrainingExercise,2,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(flexibilityTrainingExercise,2,x);
        }
        if(weaknessValue == "Chest") {
          let x = getRandomIndex(flexibilityTrainingExercise,3)
          let y = getRandomWorkout(flexibilityTrainingExercise,3,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(flexibilityTrainingExercise,3,x);
        }
        if(weaknessValue == "Forearms and Shoulders") {
          let x = getRandomIndex(flexibilityTrainingExercise,4)
          let y = getRandomWorkout(flexibilityTrainingExercise,4,x)
          secondWeakness.textContent = `Weakness Exercise 2: ${y} (30s)`
          removeDuplicates(flexibilityTrainingExercise,4,x);
        }

        secondRest.textContent = 'Rest (10s)';

        if(strengthValue == "Legs") {
          let x = getRandomIndex(flexibilityTrainingExercise, 0)
          let y = getRandomWorkout(flexibilityTrainingExercise,0,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(flexibilityTrainingExercise,0,x)
        }
        if(strengthValue == "Arms") {
          let x = getRandomIndex(flexibilityTrainingExercise, 1)
          let y = getRandomWorkout(flexibilityTrainingExercise,1,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(flexibilityTrainingExercise,1,x)
        }
        if(strengthValue == "Core") {
          let x = getRandomIndex(flexibilityTrainingExercise, 2)
          let y = getRandomWorkout(flexibilityTrainingExercise,2,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(flexibilityTrainingExercise,2,x)
        }
        if(strengthValue == "Chest") {
          let x = getRandomIndex(flexibilityTrainingExercise, 3)
          let y = getRandomWorkout(flexibilityTrainingExercise,3,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(flexibilityTrainingExercise,3,x)
        }
        if(strengthValue == "Forearms and Shoulders") {
          let x = getRandomIndex(flexibilityTrainingExercise, 4)
          let y = getRandomWorkout(flexibilityTrainingExercise,4,x)
          firstStrength.textContent = `Strength Exercise 1: ${y} (60s)`
          removeDuplicates(flexibilityTrainingExercise,4,x)
        }

        thirdRest.textContent = 'Rest (5s)';
        
        if(weaknessValue == "Legs") {
          let x = getRandomIndex(flexibilityTrainingExercise, 0)
          let y = getRandomWorkout(flexibilityTrainingExercise,0,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(flexibilityTrainingExercise,0,x)
        }
        if(weaknessValue == "Arms") {
          let x = getRandomIndex(flexibilityTrainingExercise, 1)
          let y = getRandomWorkout(flexibilityTrainingExercise,1,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(flexibilityTrainingExercise,1,x)
        }
        if(weaknessValue == "Core") {
          let x = getRandomIndex(flexibilityTrainingExercise, 2)
          let y = getRandomWorkout(flexibilityTrainingExercise,2,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(flexibilityTrainingExercise,2,x)
        }
        if(weaknessValue == "Chest") {
          let x = getRandomIndex(flexibilityTrainingExercise, 3)
          let y = getRandomWorkout(flexibilityTrainingExercise,3,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(flexibilityTrainingExercise,3,x)
        }
        if(weaknessValue == "Forearms and Shoulders") {
          let x = getRandomIndex(flexibilityTrainingExercise, 4)
          let y = getRandomWorkout(flexibilityTrainingExercise,4,x)
          thirdWeakness.textContent = `Weakness Exercise 3: ${y}(30s)`
          removeDuplicates(flexibilityTrainingExercise,4,x)
        }

        fourthRest.textContent = 'Rest (10s)'

        if(strengthValue == "Legs") {
          let x = getRandomIndex(flexibilityTrainingExercise,0)
          let y = getRandomWorkout(flexibilityTrainingExercise,0,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(flexibilityTrainingExercise,0,x)
        }
        if(strengthValue == "Arms") {
          let x = getRandomIndex(flexibilityTrainingExercise,1)
          let y = getRandomWorkout(flexibilityTrainingExercise,1,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(flexibilityTrainingExercise,1,x)
        }
        if(strengthValue == "Core") {
          let x = getRandomIndex(flexibilityTrainingExercise,2)
          let y = getRandomWorkout(flexibilityTrainingExercise,2,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(flexibilityTrainingExercise,2,x)
        }
        if(strengthValue == "Chest") {
          let x = getRandomIndex(flexibilityTrainingExercise,3)
          let y = getRandomWorkout(flexibilityTrainingExercise,3,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(flexibilityTrainingExercise,3,x)
        }
        if(strengthValue == "Forearms and Shoulders") {
          let x = getRandomIndex(flexibilityTrainingExercise,4)
          let y = getRandomWorkout(flexibilityTrainingExercise,4,x)
          secondStrength.textContent = `Strength Exercise 2: ${y} (60s)`
          removeDuplicates(flexibilityTrainingExercise,4,x)
        }

        cooldown.textContent = 'Cooldown(25s)'

        howManyTimes.textContent = `Repetitions Left: ${durationValue/5}`;

      }
      async function doWorkout() {  //https://www.sitepoint.com/delay-sleep-pause-wait/
        await sleep(3000)
        firstWeakness.style.color = 'green';
        firstWeakness.style.borderLeftColor = "green";
        firstWeakness.style.borderWidth = "5px";
        await sleep(30000)
        firstWeakness.style.borderWidth = "2px";
        firstWeakness.style.borderLeftColor = "blue";
        firstWeakness.style.color = 'black';
        firstRest.style.color = 'green';
        firstRest.style.borderLeftColor = "green";
        firstRest.style.borderWidth = "5px";
        await sleep(10000)
        firstRest.style.borderWidth = "2px";
        firstRest.style.borderLeftColor = "blue";
        firstRest.style.color = 'black';
        secondWeakness.style.color = 'green';
        secondWeakness.style.borderLeftColor = "green";
        secondWeakness.style.borderWidth = "5px";
        await sleep(30000)
        secondWeakness.style.borderWidth = "2px";
        secondWeakness.style.borderLeftColor = "blue";
        secondWeakness.style.color = 'black';
        secondRest.style.color = 'green';
        secondRest.style.borderLeftColor = "green";
        secondRest.style.borderWidth = "5px";
        await sleep(10000)
        secondRest.style.borderWidth = "2px";
        secondRest.style.borderLeftColor = "blue";
        secondRest.style.color = 'black';
        firstStrength.style.color = 'green';
        firstStrength.style.borderLeftColor = "green";
        firstStrength.style.borderWidth = "5px";
        await sleep(60000)
        firstStrength.style.borderWidth = "2px";
        firstStrength.style.borderLeftColor = "blue";
        firstStrength.style.color = 'black';
        thirdRest.style.color = 'green';
        thirdRest.style.borderLeftColor = "green";
        thirdRest.style.borderWidth = "5px";
        await sleep(5000)
        thirdRest.style.borderWidth = "2px";
        thirdRest.style.borderLeftColor = "blue";
        thirdRest.style.color = 'black';
        thirdWeakness.style.color = 'green';
        thirdWeakness.style.borderLeftColor = "green";
        thirdWeakness.style.borderWidth = "5px";
        await sleep(30000)
        thirdWeakness.style.borderWidth = "2px";
        thirdWeakness.style.borderLeftColor = "blue";
        thirdWeakness.style.color = 'black';
        fourthRest.style.color = 'green';
        fourthRest.style.borderLeftColor = "green";
        fourthRest.style.borderWidth = "5px";
        await sleep(10000)
        fourthRest.style.borderWidth = "2px";
        fourthRest.style.borderLeftColor = "blue";
        fourthRest.style.color = 'black';
        secondStrength.style.color = 'green'
        secondStrength.style.borderLeftColor = "green";
        secondStrength.style.borderWidth = "5px";
        await sleep(60000)
        secondStrength.style.borderWidth = "2px";
        secondStrength.style.borderLeftColor = "blue";
        secondStrength.style.color = 'black';
        cooldown.style.color = 'green';
        cooldown.style.borderLeftColor = "green";
        cooldown.style.borderWidth = "5px";
        await sleep(25000)
        cooldown.style.borderWidth = "2px";
        cooldown.style.borderLeftColor = "blue";
        cooldown.style.color = 'black';
      }

      async function loopWorkout() {
        getReady.style.visibility = "visible";
        countdown.innerHTML = 3;
        for(let i=durationValue/5; i>0; i--) {  
          setInterval(() => {
            if(countdown.innerHTML > 0){
              countdown.innerHTML -=1;
            }
            if(countdown.innerHTML == 0){
              countdown.innerHTML = ""
              getReady.innerHTML = "WORK!"
            }
          },1000)
          clearInterval()
          await doWorkout();
          howManyTimes.textContent = `Repetitions Left: ${i-1}`;
          if(i-1 > 0) {
            countdown.innerHTML = 3;
            getReady.innerHTML = "GET READY!"
          } else {
            clearInterval()
            getReady.remove()
            workoutComplete.style.visibility = "visible";
            workoutComplete.style.color = "green";
          }
        }
      }
      firstWeakness.style.visibility = "visible";
      firstRest.style.visibility = "visible";
      secondWeakness.style.visibility = "visible";
      secondRest.style.visibility = "visible";
      firstStrength.style.visibility = "visible";
      thirdRest.style.visibility = "visible";
      thirdWeakness.style.visibility = "visible";
      fourthRest.style.visibility = "visible";
      secondStrength.style.visibility = "visible";
      cooldown.style.visibility = "visible";
      howManyTimes.style.visibility = "visible";
      loopWorkout();
    }
  }
}

function getRandomIndex(list, index){
  let possibleExercises = list[index]
  let randWorkoutIndex = Math.floor(Math.random()*possibleExercises.length);
  return randWorkoutIndex;
}

function getRandomWorkout(exerciseType, sublist, index) {
  return exerciseType[sublist][index];
}

function removeDuplicates(list, sublist, index) {
  list[sublist].splice(index, 1);
}

