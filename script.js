const dispaly= document.getElementById("display");

function appendToDispaly(input){
    dispaly.value +=input;

}
function clearDispaly(){
    dispaly.value="";

}

function calculate(){
    try{
    dispaly.value=eval(dispaly.value)
    }
    catch(error){
        dispaly.value= "Error"
    }
}
