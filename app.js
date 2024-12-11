let url_arr = [];
let name_memes = [];
let index = 0;

const MAX_LENGTH = 100;
const API_MEMES = 'https://api.imgflip.com/get_memes';

let imageDiv = document.getElementById('image-mems');
let buttonDiv = document.getElementById('buttons')




fetch(API_MEMES)
.then((response) =>{
    return response.json();
})
.then((jsonObject) => {
    let mems_arr = jsonObject.data.memes
    for (let i = 0; i < mems_arr.length; i++) {
        url_arr.push(mems_arr[i].url)
    }
    for (let i = 0; i < mems_arr.length; i++) {
        name_memes.push(mems_arr[i].name)
    }
    displayImage();
});

console.log(length);

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