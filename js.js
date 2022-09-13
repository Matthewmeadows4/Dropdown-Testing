const element = document.getElementById("demo");
const checkValue = element.options[element.selectedIndex].value;
const checkText = element.options[element.selectedIndex].text;
demo.addEventListener("change", (e)=>{
    const value = e.target.value;
    const text = element.options[element.selectedIndex].text;

    if (value) {
        document.getElementById("pick").textContent = `Option Selected: ${value}`;}
    else{
        document.getElementById("pick").textContent = "";
    }
});

