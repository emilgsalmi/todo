/* function done (toDoList){
    container.innerHTML="";
    console.log("du klickade på")
    toDoList.splice(1,1);
} */

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

console.log(toDoList);


for (let i= 0; i < toDoList.length; i++){
    let container = document.createElement("div");
    let theList = document.createElement("ul");
    let rutine = document.createElement("li");
    let time = document.createElement("li")

    container.addEventListener("click", () => {
        done(toDoList[i]);
    });

    container.className="container";
    theList.className="theList";    

    rutine.className="theList__rutine";
    rutine.innerHTML= toDoList[i].whatToDo;

    time.className="theList__time";
    time.innerHTML=toDoList[i].timeToDo;

    theList.appendChild(rutine);
    theList.appendChild(time);
    
    container.appendChild(theList);

    document.body.appendChild(container);

    function done (toDo){
        container.innerHTML="";
        console.log("du klickade på")
        toDoList.push;
    }
}