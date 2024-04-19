window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiUrl = 'https://azureresumefuncapp.azurewebsites.net/api/GetResumeCounter?code=65lXymWvpVoqQ8UxaOrA9BgBdyDJXP8PORuBG0IabzAQAzFuFBYGYA=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);

    });
    return count;
}