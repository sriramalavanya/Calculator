let heading = document.querySelector(".hed");
let hed = document.querySelector(".hed");
let albts = document.querySelector(".btts");

document.querySelector(".hed").addEventListener("mouseover", () => {
    hed.style.backgroundColor = "gray";
    hed.style.backgroundColor = "gray";
    hed.style.color = "white";
})
document.querySelector(".hed").addEventListener("mouseout", () => {
    hed.style.backgroundColor = "black";
    hed.style.color = "white";
})
let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");
let b5 = document.querySelector(".b5");
let b6 = document.querySelector(".b6");
let b7 = document.querySelector(".b7");
let b8 = document.querySelector(".b8");
let b9 = document.querySelector(".b9");
let val = "";

b1.addEventListener("click", () => {
    val = val + 1;
    console.log("val :" + val);
    heading.innerHTML = heading.innerHTML + 1;
})

b2.addEventListener("click", () => {
    val = val + 2;

    heading.innerHTML = heading.innerHTML + 2;

})
b3.addEventListener("click", () => {
    val = val + 3;

    heading.innerHTML = heading.innerHTML + 3;

})
b4.addEventListener("click", () => {
    val = val + 4;

    heading.innerHTML = heading.innerHTML + 4;

})
b5.addEventListener("click", () => {
    val = val + 5;

    heading.innerHTML = heading.innerHTML + 5;

})
b6.addEventListener("click", () => {
    val = val + 6;

    heading.innerHTML = heading.innerHTML + 6;

})
b7.addEventListener("click", () => {
    val = val + 7;

    heading.innerHTML = heading.innerHTML + 7;

})
b8.addEventListener("click", () => {
    val = val + 8;

    heading.innerHTML = heading.innerHTML + 8;

})
b9.addEventListener("click", () => {
    val += 9;

    heading.innerHTML = heading.innerHTML + 9;

})
let ze = document.querySelector(".ze").addEventListener("click", () => {
    val = val + 0;
    heading.innerHTML = heading.innerHTML + 0;
})

let ac = document.querySelector(".ac").addEventListener("click", () => {
    heading.innerHTML = "";
    val = "";
})
let dot = document.querySelector(".dot").addEventListener("click", () => {
    console.log(dot)
    heading.innerHTML = heading.innerHTML + ".";
    val = val + ".";
})

let val1;
let char;

document.querySelector(".plus").addEventListener("click", () => {
    val1 = Number(val);
    val = "";
    heading.innerHTML = heading.innerHTML + " + ";

    // heading.innerHTML anedi string daniki inkoka string heading.innerhtml ani add chestnav enduku num display avataniki
    char = "+";

})

document.querySelector(".per").addEventListener("click", () => {
    val1 = Number(val);
    val = "";
    heading.innerHTML = heading.innerHTML + " % ";
    char = "%"
})
document.querySelector(".bin").addEventListener("click", () => {
    val1 = Number(val);
    val = "";
    heading.innerHTML = heading.innerHTML + " * ";
    char = "*"
})
document.querySelector(".minus").addEventListener("click", () => {

    val1 = Number(val);
    val = "";
    heading.innerHTML = heading.innerHTML + " - ";
    char = "-"
})
document.querySelector(".eq").addEventListener("click", () => {
    let val2 = Number(val);
    let val3;

    if (char === "+") {
        val3 = val1 + val2;
    }
    else if (char === "-") {
        val3 = val1 - val2;
    }
    else if (char === "*") {
        val3 = val1 * val2;
    }
    else {
        val3 = val1 / val2;
    }
    heading.innerHTML = heading.innerHTML + " = " + val3;
})



let str = " Uday";

"hi my name is" + str              = "";