function calculateBMI() {
    let height = document.getElementById('height').value / 100;
    let weight = document.getElementById('weight').value;
    
    if (height > 0 && weight > 0) {
        let bmi = (weight / (height * height)).toFixed(2);
        let resultText = `BMI Değeriniz: ${bmi}`;
        
        document.getElementById('result').innerText = resultText;
    } else {
        document.getElementById('result').innerText = "Lütfen geçerli bir değer giriniz!";
    }
}
