/* min function */
function done (toDo){
    let checkedContainer=document.querySelector(".checked ul")
    let container=document.querySelector(".container ul")

    if(toDo.classList.contains("theList__checked")) {
        checkedContainer.removeChild(toDo);
        toDo.classList.remove("theList__checked")
        console.log("Du har ångrat din check av " + toDo.innerText);
        container.appendChild(toDo);
    } else{
        toDo.classList.add("theList__checked")
        console.log("Du har checkat av " + toDo.innerText);
        container.removeChild(toDo);
        checkedContainer.appendChild(toDo);
    }

    }
/* min klass */
class toDo{
    constructor(whatToDo,timeToDo){
    this.whatToDo=whatToDo;
    this.timeToDo=timeToDo;
    };
}
/* mitt objekt */
let toDoList = [
phone = new toDo ("looking through phone", 10),
brush = new toDo ("brush teeth", 10),
coffe = new toDo ("drinking coffé", 30),
shower = new toDo ("taking a shower", 20),
];

/* min localStorage */
localStorage.setItem("theList", JSON.stringify(toDoList));
let myList = localStorage.getItem("theList");
let List = JSON.parse(myList);

/* mina skapda HTMLtaggar */
let toDoTitle = document.createElement("h3")
let doneTitle = document.createElement("h3") 
let container = document.createElement("div");
let otherContainer= document.createElement("div")
let aList = document.createElement("ul");
let checkedList= document.createElement("ul");

/* här är mina HTML klasser och HTML nästlingar */
otherContainer.className="checked";
container.className="container";
aList.className="aList";
container.appendChild(toDoTitle);
otherContainer.appendChild(doneTitle);
container.appendChild(aList);
otherContainer.appendChild(checkedList);
document.body.appendChild(container);
document.body.appendChild(otherContainer);

toDoTitle.innerHTML="To Do";
doneTitle.innerHTML="Done";

/* min forloop för listan */
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
/* mina valda listItems */
let listItem = document.querySelectorAll(".theList__item")

/* min forloop för att sätta klick händelse */
for (let i= 0; i < listItem.length; i++){
    listItem[i].addEventListener("click", () => {
    done(listItem[i]);
    });
}