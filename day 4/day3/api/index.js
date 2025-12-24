
 const APIkey  = "3050245b303bb0cdda528f23be488245"; 
//  async function showWeather(){
// try {
    
//      let lon = 12.2000 ;
//      let lat = 38.6333 ;

//      const response = await  fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}` );

//      const data = await response.json();

//      console.log("weather data =>"  , data );

     
      
// } catch (error) {
    
// }
// }

 function responseside(data){
     let newpara = document.createElement('p');
     newpara.textContent = `${data?.main?.temp.toFixed(2)} °C`

     document.body.appendChild(newpara);


}




async function weatherchek(){
try {
       let lat = 38.6333; 
     let lon = 12.2000;


     let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);
     let data = await response.json();

     console.log("wehter chek" , data);
     responseside(data);
   
} catch (error) {
    console.log("api is not working" , error);
}


}
