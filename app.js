async function searchweather() {
    let city=document.getElementById("cityInput").value.trim();

    if(city===""){
        document.getElementById("message").innerText="please enter a cityvname!";
        return;
   
    }

    document.getElementById("message").innerText="Loarding weather details...";
}