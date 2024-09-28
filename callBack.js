// call-back function(kono ekta fun e parameter hisebe onno ekta function pathabo )

function greeting(greetingHandleer, name) {
  greetingHandleer(name);
  // return person;
}
// const name = "Halim mama";
// const num = 20;
// const arr = [20, 45, 67, 65];
// const obj = { id: 2, name: "Asus", price: 39999999 };

function greetingHandleer(name) {
  console.log("Good Morning", name);
}

function greetingEvening(name) {
  console.log("Good Evening", name);
}

function greetingNight(name) {
  console.log("Good Night", name);
}

greeting(greetingHandleer, "Tonmoy Sutradhar");
greeting(greetingEvening, "Meghla Sutradhar");
greeting(greetingNight, "Bimol Sutradhar");
// console.log(obj);

// Jeta use kori eigular maddhome------->
// 2 ta same (It's called call-back function)

document.getElementById("btn-submit").addEventListener("click", function () {});

// ----->>
function submitHandler() {
  console.log("Submit btn clicked");
}
document.getElementById("btn-submit").addEventListener("click", submitHandler);
