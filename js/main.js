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
    addElName.textContent = car.name
    let addElColor = document.createElement("p");
    addElColor.textContent = car.color;
    let addElPosition = document.createElement("p");
    addElPosition.textContent = car.position;
    let addElDate = document.createElement("p");
    addElDate.textContent = car.date;
    let addElRace = document.createElement("p");
    addElRace.textContent = car.race;
    let addElPrice = document.createElement("p");
    addElPrice.textContent = car.price;


    addEl.append(addElName);
    addEl.append(addElColor);
    addEl.append(addElPosition);
    addEl.append(addElDate);
    addEl.append(addElRace);
    addEl.append(addElPrice);

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


