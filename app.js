let userName = document.getElementById("txt-name");
let gradeOne = document.getElementById("grade-one");
let gradeTwo = document.getElementById("grade-two");
let gradeThree = document.getElementById("grade-three");
let responsePredictionNote = document.getElementById("response-prediction-third-note");
let response = document.getElementById("response");
const btnSend = document.getElementById("btn-send");
let studentName = userName.value;
let noteOne = (gradeOne.value*30)/100;
let notetwo = (gradeTwo.value*30)/100;
let noteThree = (gradeThree.value*40)/100;
let finalNote = (noteOne+notetwo+noteThree);

btnSend.addEventListener("click",calculateNote)
gradeThree.addEventListener("click",predictionThirdNote)

function calculateNote(event){
    if(event.pointerId = 1 || event.code == "Enter"){
        if(finalNote >= 4.6){
            response.textContent = studentName + " su nota es: " + finalNote + " usted es un estudiante excelente";
        }else if(finalNote >= 3.5 && finalNote <=4.5){
            response.textContent = studentName + " su nota es: " + finalNote + " usted es un estudiante bueno";
        }else if(finalNote >= 2 && finalNote <=3.4){
            response.textContent = studentName + " su nota es: " + finalNote + " usted perdio al materia y podra recuperar";
        }else if(finalNote <2){
            response.textContent = studentName + " su nota es: " + finalNote + " usted perdio al materia y debera repetirla";
        }
    }
}
    
function predictionThirdNote(event){
    if(event.pointerId = 1 || event.code == "Enter"){
        let prediction = (noteOne+notetwo);
        console.log(prediction);
    }
}