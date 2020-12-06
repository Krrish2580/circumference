function calcCircumfrence(){
    let radius = document.getElementById("radius").value;
    let circumference = document.getElementById("circumference");
    let result = Math.PI*2*radius;
    circumference.innerHTML = result.toFixed(2);
}