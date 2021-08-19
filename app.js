let btnTranslate = document.querySelector("#btn-translate")
let txtInput = document.querySelector('#txt-input')
let outputDiv = document.querySelector('#output')

let url = "https://api.funtranslations.com/translate/groot.json"

//construct the api call link
function constructURL(text){
    return url + "?text=" + text
}

function errorHandler(error){
    console.log("error occured", error);
    alert("Something Wrong with server, Try again after some time .")
}

function clickHandler(){
    
    let inputText = txtInput.value
    
    //Calling the Server
    fetch(constructURL(inputText))
        .then(response => response.json())
        .then(json =>{
                let translatedText = json.contents.translated
                outputDiv.innerText = translatedText
            })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)