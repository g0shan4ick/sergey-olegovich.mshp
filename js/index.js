let x1y1 = document.querySelector(`#x1y1`);
let x1y2 = document.querySelector(`#x1y2`);
let x1y3 = document.querySelector(`#x1y3`);
let x1y4 = document.querySelector(`#x1y4`);
let x2y1 = document.querySelector(`#x2y1`);
let x2y2 = document.querySelector(`#x2y2`);
let x2y3 = document.querySelector(`#x2y3`);
let x2y4 = document.querySelector(`#x2y4`);
let x3y1 = document.querySelector(`#x3y1`);
let x3y2 = document.querySelector(`#x3y2`);
let x3y3 = document.querySelector(`#x3y3`);
let x3y4 = document.querySelector(`#x3y4`);
let placesInfoNode = document.querySelector(`#places-info`);
let placeCountNode = document.querySelector(`#place-count`);
let priceNode = document.querySelector(`#price`);
let confirmNode = document.querySelector(`#confirm`);
let formNode = document.querySelector(`#form`);
let placesCounter = 0;
x1y1.addEventListener(`click`, function(){
    if (x1y1.classList.contains(`btn-primary`)) {
        x1y1.classList.remove(`btn-primary`);
        x1y1.classList.add(`btn-success`);
        placesCounter++;
        placesInfoNode.classList.remove(`d-none`);
        placeCountNode.innerHTML = `Выбрано мест: ${placesCounter}`;
        priceNode.innerHTML = `Стоимость билетов: ${placesCounter *350} руб.`;
    }
});
x1y2.addEventListener(`click`, function(){
    if (x1y2.classList.contains(`btn-primary`)) {
        x1y2.classList.remove(`btn-primary`);
        x1y2.classList.add(`btn-success`);

        placesCounter++;
        placesInfoNode.classList.remove(`d-none`);
        placeCountNode.innerHTML = `Выбрано мест: ${placesCounter}`;
        priceNode.innerHTML = `Стоимость билетов: ${placesCounter *350} руб.`;
    }
});

x1y3.addEventListener(`click`, function(){
    if (x1y3.classList.contains(`btn-primary`)) {
        x1y3.classList.remove(`btn-primary`);
        x1y3.classList.add(`btn-success`);

        placesCounter++;
        placesInfoNode.classList.remove(`d-none`);
        placeCountNode.innerHTML = `Выбрано мест: ${placesCounter}`;
        priceNode.innerHTML = `Стоимость билетов: ${placesCounter * 350} руб.`;
    }
});

x1y4.addEventListener(`click`, function(){
    if (x1y4.classList.contains(`btn-primary`)) {
        x1y4.classList.remove(`btn-primary`);
        x1y4.classList.add(`btn-success`);

        placesCounter++;
        placesInfoNode.classList.remove(`d-none`);
        placeCountNode.innerHTML = `Выбрано мест: ${placesCounter}`;
        priceNode.innerHTML = `Стоимость билетов: ${placesCounter * 350} руб.`;
    }
});

x2y1.addEventListener(`click`, function(){
    if (x2y1.classList.contains(`btn-primary`)) {
        x2y1.classList.remove(`btn-primary`);
        x2y1.classList.add(`btn-success`);

        placesCounter++;
        placesInfoNode.classList.remove(`d-none`);
        placeCountNode.innerHTML = `Выбрано мест: ${placesCounter}`;
        priceNode.innerHTML = `Стоимость билетов: ${placesCounter * 350} руб.`;
    }
});

x2y2.addEventListener(`click`, function(){
    if (x2y2.classList.contains(`btn-primary`)) {
        x2y2.classList.remove(`btn-primary`);
        x2y2.classList.add(`btn-success`);

        placesCounter++;
        placesInfoNode.classList.remove(`d-none`);
        placeCountNode.innerHTML = `Выбрано мест: ${placesCounter}`;
        priceNode.innerHTML = `Стоимость билетов: ${placesCounter * 350} руб.`;
    }
});

x2y3.addEventListener(`click`, function(){
    if (x2y3.classList.contains(`btn-primary`)) {
        x2y3.classList.remove(`btn-primary`);
        x2y3.classList.add(`btn-success`);

        placesCounter++;
        placesInfoNode.classList.remove(`d-none`);
        placeCountNode.innerHTML = `Выбрано мест: ${placesCounter}`;
        priceNode.innerHTML = `Стоимость билетов: ${placesCounter *350} руб.`;
    }
});

x2y4.addEventListener(`click`, function(){
    if (x2y4.classList.contains(`btn-primary`)) {
        x2y4.classList.remove(`btn-primary`);
        x2y4.classList.add(`btn-success`);

        placesCounter++;
        placesInfoNode.classList.remove(`d-none`);
        placeCountNode.innerHTML = `Выбрано мест: ${placesCounter}`;
        priceNode.innerHTML = `Стоимость билетов: ${placesCounter * 350} руб.`;
    }
});

x3y1.addEventListener(`click`, function(){
    if (x3y1.classList.contains(`btn-primary`)) {
        x3y1.classList.remove(`btn-primary`);
        x3y1.classList.add(`btn-success`);

        placesCounter++;
        placesInfoNode.classList.remove(`d-none`);
        placeCountNode.innerHTML = `Выбрано мест: ${placesCounter}`;
        priceNode.innerHTML = `Стоимость билетов: ${placesCounter *350} руб.`;
    }
});

x3y2.addEventListener(`click`, function(){
    if (x3y2.classList.contains(`btn-primary`)) {
        x3y2.classList.remove(`btn-primary`);
        x3y2.classList.add(`btn-success`);

        placesCounter++;
        placesInfoNode.classList.remove(`d-none`);
        placeCountNode.innerHTML = `Выбрано мест: ${placesCounter}`;
        priceNode.innerHTML = `Стоимость билетов: ${placesCounter *350} руб.`;
    }
});

x3y3.addEventListener(`click`, function(){
    if (x3y3.classList.contains(`btn-primary`)) {
        x3y3.classList.remove(`btn-primary`);
        x3y3.classList.add(`btn-success`);

        placesCounter++;
        placesInfoNode.classList.remove(`d-none`);
        placeCountNode.innerHTML = `Выбрано мест: ${placesCounter}`;
        priceNode.innerHTML = `Стоимость билетов: ${placesCounter *350} руб.`;
    }
});

x3y4.addEventListener(`click`, function(){
    if (x3y4.classList.contains(`btn-primary`)) {
        x3y4.classList.remove(`btn-primary`);
        x3y4.classList.add(`btn-success`);

        placesCounter++;
        placesInfoNode.classList.remove(`d-none`);
        placeCountNode.innerHTML = `Выбрано мест: ${placesCounter}`;
        priceNode.innerHTML = `Стоимость билетов: ${placesCounter *350} руб.`;
    }
});

confirmNode.addEventListener(`click`, function(){
    formNode.classList.remove(`d-none`);

    if (x1y1.classList.contains(`btn-success`)) {
        x1y1.classList.remove(`btn-success`);
        x1y1.classList.add(`btn-warning`);
        x1y1.classList.add(`disabled`);
    }
    if (x1y2.classList.contains(`btn-success`)) {
        x1y2.classList.remove(`btn-success`);
        x1y2.classList.add(`btn-warning`);
        x1y2.classList.add(`disabled`);
    }
    if (x1y3.classList.contains(`btn-success`)) {
        x1y3.classList.remove(`btn-success`);
        x1y3.classList.add(`btn-warning`);
        x1y3.classList.add(`disabled`);
    }
    if (x1y4.classList.contains(`btn-success`)) {
        x1y4.classList.remove(`btn-success`);
        x1y4.classList.add(`btn-warning`);
        x1y4.classList.add(`disabled`);
    }

    if (x2y1.classList.contains(`btn-success`)) {
        x2y1.classList.remove(`btn-success`);
        x2y1.classList.add(`btn-warning`);
        x2y1.classList.add(`disabled`);
    }
    if (x2y2.classList.contains(`btn-success`)) {
        x2y2.classList.remove(`btn-success`);
        x2y2.classList.add(`btn-warning`);
        x2y2.classList.add(`disabled`);
    }
    if (x2y3.classList.contains(`btn-success`)) {
        x2y3.classList.remove(`btn-success`);
        x2y3.classList.add(`btn-warning`);
        x2y3.classList.add(`disabled`);
    }
    if (x2y4.classList.contains(`btn-success`)) {
        x2y4.classList.remove(`btn-success`);
        x2y4.classList.add(`btn-warning`);
        x2y4.classList.add(`disabled`);
    }
    
    if (x3y1.classList.contains(`btn-success`)) {
        x3y1.classList.remove(`btn-success`);
        x3y1.classList.add(`btn-warning`);
        x3y1.classList.add(`disabled`);
    }
    if (x3y2.classList.contains(`btn-success`)) {
        x3y2.classList.remove(`btn-success`);
        x3y2.classList.add(`btn-warning`);
        x3y2.classList.add(`disabled`);
    }
    if (x3y3.classList.contains(`btn-success`)) {
        x3y3.classList.remove(`btn-success`);
        x3y3.classList.add(`btn-warning`);
        x3y3.classList.add(`disabled`);
    }
    if (x3y4.classList.contains(`btn-success`)) {
        x3y4.classList.remove(`btn-success`);
        x3y4.classList.add(`btn-warning`);
        x3y4.classList.add(`disabled`);
    }
});