let lotto6 = document.querySelector("#lotto6-49"); //lotto 6/49 div
let elements = 49;
let lotto_type = document.querySelector("#lotto_type");
let maxElements = 0;
let numbers = localStorage.getItem("numbers") || [];

//set lotto type
lotto_type.innerHTML = "Lotto 6/49";

function makeNumbers () {
    for (let i = 1; i <= elements; i++) {
        let element = document.createElement("div");
        element.id = "element";
        element.innerHTML = i;
        let finalNumber = {
            number: i,
            selected: false
        };
        element.addEventListener("click", () => {
            if (element.style.background != "red") {
                if (maxElements < 6) {
                    meelent.style.background = "red";
                    maxElements++;
                    numbers = [...numbers, finalNumbers];
                    localStorage.setItem("numbers", numbers);
                    console.log(numbers);
                } else {
                    alert('you can choose max 6 numbers');
                }
            } else {
                element.style.background = "green";
                maxElements--;
                numbers.splice(numbers.indexOf(i), 1);
                localStorage.setItem("numbers", numbers);
                console.log(numbers);
            }
        });
        lotto6.appendChild(element);
    }
}

makeNumbers();

function bet () {
    if (numbers.length != 6) {
        alert('you need to select 6 numbers! please');
    } else {
        alert(numbers);
    }
}