let bmiBerechnung = () => {
    let groesse = parseInt(document.getElementById("groesseInput").value);
    let gewicht = parseInt(document.getElementById("gewichtInput").value);
    let statement = document.getElementById("result-statement");
    let bmiermitteln = document.getElementById("bmiErmittelt")
    let BMI = Math.round((gewicht / Math.pow((groesse/100),2))*10)/10;

        document.getElementById("bmiErmittelt").value = BMI;

        bmiermitteln.value = BMI;

        if(BMI < 18.5){
            statement.innerText = "Untergewicht";
        }else if((BMI > 18.5) && (BMI < 24.9)){
            statement.innerText = "Normalgewicht";
        }else if((BMI > 25) && (BMI < 29.9 )){
            statement.innerText = "Übergewicht";
        }else{
            statement.innerText = "Zu Fett";
        }
}
document.getElementById("rechnen").addEventListener("click", bmiBerechnung);