let fahrenheit, value;
        let compute=0;
        let cell = -17.222;
        function computeValue(){

            fahrenheit = parseInt(document.getElementById("fahrenheits").value);
            
                
            compute = fahrenheit * cell;
            document.getElementById("output").value = compute;
            
        }
        document.getElementById("bntcompute").addEventListener("click", computeValue);

