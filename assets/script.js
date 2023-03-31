/**
 * fetch Api
 * write function that takes text from input bar or buttons and passes it to the weather search API
 * you're gonna need to write a super long chain of .thens, starting with the search term, going to the latitude and longitude, taking the latitude and longitude and passing it to the 5 day forecast, and the current weather api and then using the results to change the webpage 
 * you'll also need to create buttons for every time that the user clicks submit. you can store these as an array in local storage
 */


document.querySelector('#submitButton').addEventListener('click',search)

function search (event){
    event.preventDefault();

    let searchTerm=event.target.id==="submitButton"?event.target.previousElementSibling.value:event.target.value;

    let button = document.createElement("button");
    button.innerText = searchTerm;
    button.addEventListener("click",search);
    document.querySelector("#buttonArea").appendChild(button);

    //local storage to save search term to array 


    fetch('https://maps.googleapis.com/maps/api/geocode/json?address=&key=AIzaSyD00YDw4n0kK8War2-yz_HdlSzuSvOWybU'+searchTerm.trim()).then(function(response){
        return response.json();
    }).then(function(results){
        console.log(results)
    })
}