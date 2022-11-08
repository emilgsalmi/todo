function done (toDo){
    if(toDo.classList.contains("theList__checked")) {
        toDo.classList.remove("theList__checked")

    } else{
        toDo.classList.add("theList__checked")
    }

    }

class toDo{
    constructor(whatToDo,timeToDo){
    this.whatToDo=whatToDo;
    this.timeToDo=timeToDo;
    };
}

let toDoList = [
phone = new toDo ("looking through phone", 10),
brush = new toDo ("brush teeth", 10),
coffe = new toDo ("drinking coffé", 30),
shower = new toDo ("taking a shower", 20),
];


localStorage.setItem("theList", JSON.stringify(toDoList));

let myList = localStorage.getItem("theList");
let List = JSON.parse(myList);

console.log(List);

let container = document.createElement("div");
let aList = document.createElement("ul");

container.className="container";
aList.className="aList";
container.appendChild(aList);
document.body.appendChild(container);

for (let i= 0; i < List.length; i++){
    let rutine = document.createElement("li");
    let time = document.createElement("span")

    rutine.className="theList__rutine";
    rutine.classList.add("theList__item");
    rutine.innerHTML= List[i].whatToDo;

    time.className="theList__time";
    time.innerHTML=List[i].timeToDo + " min";

    aList.appendChild(rutine);
    rutine.appendChild(time);    
}

let listItem = document.querySelectorAll(".theList__item")

for (let i= 0; i < listItem.length; i++){
    listItem[i].addEventListener("click", () => {
    done(listItem[i]);
    });
}