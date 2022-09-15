var elResult = document.querySelector(".result");

var elForm = document.querySelector("form");

var elName = document.querySelector(".carName")
var elColor = document.querySelector(".carColor")
var elPosition = document.querySelector(".carPosition")
var elDate = document.querySelector(".carDate")
var elRace = document.querySelector(".carRace")
var elPrice = document.querySelector(".carPrice")
var carArr = [];


elForm.addEventListener('submit', (evt) =>{
    evt.preventDefault();

    let name = elName.value;
    let color = elName.value;
    let position = elPosition.value;
    let date = elDate.value;
    let race = elRace.value;
    let price = elPrice.value;

    var carObj = {
        name: name,
        color: color,
        position: position,
        date: date,
        race: race,
        price: price
    }

    carArr.push(carObj);
    

    console.log(carArr)
    
    renderAll(carArr);


    elName.value = "";
    elColor.value = "";
    elPosition.value = "";
    elDate.value = "";
    elRace.value = "";
    elPrice.value = "";
    
    
})

function render1Car(car){
    let addEl = document.createElement("div");
    addEl.className = "card col-3";

    let addElName = document.createElement("h2");
    addElName.textContent = `Name: ${car.name}`;
    addElName.className = "card-body";
    let addElUl = document.createElement("ul");
    addElUl.className = "list-group list-group-flush";
    let addElColor = document.createElement("li");
    addElColor.className = "list-group-item";
    addElColor.textContent = `Color: ${car.color}`;
    let addElPosition = document.createElement("li");
    addElPosition.textContent = `Position: ${car.position}`;
    addElPosition.className = "list-group-item";
    let addElDate = document.createElement("li");
    addElDate.textContent = `Date: ${car.date}`;
    addElDate.className = "list-group-item";
    let addElRace = document.createElement("li");
    addElRace.textContent = `Race: ${car.race}`;
    addElRace.className = "list-group-item";
    let addElPrice = document.createElement("li");
    addElPrice.textContent = `Price: $${car.price}`;
    addElPrice.className = "list-group-item";

    addEl.append(addElName);
    addEl.append(addElUl)
    addElUl.append(addElColor);
    addElUl.append(addElPosition);
    addElUl.append(addElDate);
    addElUl.append(addElRace);
    addElUl.append(addElPrice);

    return addEl;
}

function renderAll(cars){
    elResult.innerHTML = null;

    for(let i = 0; i < cars.length; i++){
        let oneCard = render1Car(carArr[i]);
        elResult.append(oneCard)
    }
}







// for(let i = 0; i < carArr.length; i++){
//     let name = elName.value;
//     let color = elName.value;
//     let position = elPosition.value;
//     let date = elDate.value;
//     let race = elRace.value;
//     let price = elPrice.value;
    
//     
//         
    
//     }


