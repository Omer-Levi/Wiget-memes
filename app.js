let url_arr = [];
let name_memes = [];
let index = 0;

const MAX_LENGTH = 100;

let imageDiv = document.getElementById('image-mems');
let buttonDiv = document.getElementById('buttons')


async function getMemes() {
    const url = 'https://api.imgflip.com/get_memes';
    const response = await fetch(url);
    const json = await response.json();
    return json.data.memes;
}

async function init() {
    const memes = await getMemes();
    for (let i = 0; i < memes.length; i++) {
        url_arr.push(memes[i].url)
    }
    for (let i = 0; i < memes.length; i++) {
        name_memes.push(memes[i].name)
    }
    displayImage();
}

init()

function displayImage(){
    let display = `<div>        
        <img src=${url_arr[index]} alt="" width="300">
        <h5 class="text-light">${name_memes[index]}</h5> </div>`
    let click = `<div> <a href="#" onclick="lastOne();" class="btn btn-primary">beck</a> <a href="#" onclick="plusOne();" class="btn btn-primary">next</a> </div>`
    imageDiv.innerHTML = display;
    buttonDiv.innerHTML = click;
    }
    
function plusOne(){
    index++;
    if(index >= MAX_LENGTH){
            index = 0;
        }
    displayImage();
}

function lastOne(){
    index--;
    if(index <= -1){
        index = MAX_LENGTH - 1;
    }
    displayImage();
}