let lotto6 = document.querySelector("#lotto6-49"); //lotto 6/49 div
let elements = 49;
let lotto_type = document.querySelector("#lotto_type");
let maxElements = 0;
let numbers = [];

//set lotto type
lotto_type.innerHTML = "Lotto 6/49";

for (let i = 1; i <= elements; i++) {
    let element = document.createElement("div");
    element.id = "element";
    element.innerHTML = i;
    element.addEventListener("click", () => {
        if (element.style.background != "red") {
            if (maxElements < 6) {
                element.style.background = "red";
                maxElements++;
                numbers.push(i);
                console.log(numbers);
            } else {
                alert('you can choose max 6 numbers');
            }
        } else {
            element.style.background = "green";
            maxElements--;
            numbers.splice(numbers.indexOf(i), 1);
            console.log(numbers);
        }
    });
    lotto6.appendChild(element);
}

function bet () {
    if (numbers.length != 6) {
        alert('you need to select 6 numbers! please');
    } else {
        alert(numbers);
    }
}