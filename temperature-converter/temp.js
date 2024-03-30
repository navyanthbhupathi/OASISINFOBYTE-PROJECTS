
        function convert() 
        {
            var temperature = parseFloat(document.getElementById("temperature").value);
            var conversionType = document.getElementById("conversionType").value;
            var result;
    
            if (conversionType === "CelToFah") {
                result = (temperature * 9/5) + 32;
                document.getElementById("result").innerHTML = temperature + "°C = " + result + "°F";
            } 
            else if (conversionType === "FahToCel") {
                result = (temperature - 32) * 5/9;
                document.getElementById("result").innerHTML = temperature + "°F = " + result + "°C";
            }
            else if (conversionType === "CelToKel") {
                result = temperature -273.15;
                document.getElementById("result").innerHTML = temperature + "°C = " + result + "K";
            }
            else if (conversionType === "KelToCel") {
                result = temperature + 273.15;
                document.getElementById("result").innerHTML = temperature + "K = " + result + "°C";
            }
        }
 
