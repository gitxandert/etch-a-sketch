const body=document.querySelector('body');
body.setAttribute('style', 'display: flex; justify-content: center;')

const container=document.querySelector('div');
container.setAttribute('style', 'display: flex; justify-content: center; width: 640px; flex-wrap: wrap;');

for(i=0;i<16*16;i++){
    let square=document.createElement('div');
    square.setAttribute('class', 'hover');
    square.setAttribute('style', 'height: 40px; width: 40px; border: 4px; border-radius: 2px; background-color: black;');
    container.appendChild(square);
}