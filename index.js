function calculateFare() {
  //input variables
  let age = document.getElementById("age-el").value;
  let proofOfAge = document.getElementById("proof-of-age-el").value;
  let numOfTrips = document.getElementById("num-of-trips-el").value;
  let allUnder2hrs = document.getElementById("time-limit-el").value;
  let numOfTripUnder2hrs = document.getElementById(
    "num-of-trips-under-2hrs"
  ).value;

  //fare variables
  let childFare = 0;
  let studentFare = 2.25;
  let adultFare = 3.25;
  let seniorFare = 2.3;

  //message variables
  let isChildMessage = "The fare is free because you are a child";
  let isStudentMessage =
    "You are paying the student fare. Only valid with student ID";
  let isAdultMessage =
    "You are paying the adult fare. If you are a student, this is because you do not have a valid student's ID";
  let isSeniorMessage = "You are recieving a senior discount";
  let timeLimitMessage = "This fare is subject to 2 hr time limits";

  if (age < 12) {
    //code here
    document.getElementById("fare-el").innerText = "$" + childFare;
    document.getElementById("type-of-fare").innerText = isChildMessage;
  } else if (age >= 12 && age <= 24) {
    //code here
    if (proofOfAge === "y") {
      if (allUnder2hrs === "y") {
        document.getElementById("fare-el").innerText =
          "$" + studentFare.toFixed(2);
        document.getElementById("type-of-fare").innerText =
          isStudentMessage + ". " + timeLimitMessage;
      } else {
        studentFare =
          (numOfTrips - numOfTripUnder2hrs) * studentFare + studentFare;
        document.getElementById("fare-el").innerText =
          "$" + studentFare.toFixed(2);
        document.getElementById("type-of-fare").innerText = isStudentMessage;
      }
    } else {
      //if proofOfAge is anything other than "y"
      if (allUnder2hrs === "y") {
        document.getElementById("fare-el").innerText =
          "$" + adultFare.toFixed(2);
        document.getElementById("type-of-fare").innerText =
          isAdultMessage + ". " + timeLimitMessage;
      } else {
        adultFare = (numOfTrips - numOfTripUnder2hrs) * adultFare + adultFare;
        document.getElementById("fare-el").innerText =
          "$" + adultFare.toFixed(2);
        document.getElementById("type-of-fare").innerText = isAdultMessage;
      }
    }
  } else if (age > 24 && age < 65) {
    if (allUnder2hrs === "y") {
      document.getElementById("fare-el").innerText = "$" + adultFare.toFixed(2);
      document.getElementById("type-of-fare").innerText =
        isAdultMessage + ". " + timeLimitMessage;
    } else {
      adultFare = (numOfTrips - numOfTripUnder2hrs) * adultFare + adultFare;
      document.getElementById("fare-el").innerText = "$" + adultFare.toFixed(2);
      document.getElementById("type-of-fare").innerText = isAdultMessage;
    }
  } else {
    //senior code here
    if (proofOfAge === "y") {
      if (allUnder2hrs === "y") {
        document.getElementById("fare-el").innerText =
          "$" + seniorFare.toFixed(2);
        document.getElementById("type-of-fare").innerText =
          isSeniorMessage + ". " + timeLimitMessage;
      } else {
        //not under 2 hrs
        seniorFare =
          (numOfTrips - numOfTripUnder2hrs) * seniorFare + seniorFare;
        document.getElementById("fare-el").innerText =
          "$" + seniorFare.toFixed(2);
        document.getElementById("type-of-fare").innerText = isSeniorMessage;
      }
    } else {
      //no proof of age
      if (allUnder2hrs === "y") {
        document.getElementById("fare-el").innerText =
          "$" + adultFare.toFixed(2);
        document.getElementById("type-of-fare").innerText =
          isAdultMessage + ". " + timeLimitMessage;
      } else {
        //not under 2 hrs with no proof of age (adult fare)
        adultFare = (numOfTrips - numOfTripUnder2hrs) * adultFare + adultFare;
        document.getElementById("fare-el").innerText =
          "$" + adultFare.toFixed(2);
        document.getElementById("type-of-fare").innerText = isAdultMessage;
        console.log(adultFare);
      }
    }
  }
}
