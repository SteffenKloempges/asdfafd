console.log("it works")

function giveColor(){
    /* console.log("function works") */
    const inputColor = document.getElementById("inputColor").value
    console.log(inputColor)
    document.body.style.backgroundColor = inputColor
}