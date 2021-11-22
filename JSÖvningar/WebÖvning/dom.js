function display() {
    let inputName = document.getElementById("txt1");
    let result = document.querySelector("#result");
    result.textContent = `Hello ${inputName.value}`;
    document.body.appendChild(result);
    inputName.value = "";
    // inputName.maxLength= 10;
    inputName.disabled = true;  // disable input after the first input

}

function dropDownDisplay() {
    let ddm1 = document.querySelector("#ddm1");
    console.log(ddm1.value);
    let ddm2 = document.querySelector("#ddm2");
    console.log(ddm2.value);
}