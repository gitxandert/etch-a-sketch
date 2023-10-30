const body=document.querySelector('body');
body.setAttribute('style', 'display: flex; justify-content: center;')

const container=document.querySelector('div');
container.setAttribute('style', 'display: flex; justify-content: center; gap: 20px; flex-direction: column; width: 640px; flex-wrap: wrap;');

const options=document.createElement('div');
options.setAttribute('style', 'display: flex; justify-content: space-between;');
container.appendChild(options);

const reset = document.createElement('button');
reset.textContent = 'Reset';
reset.setAttribute('style', 'border-radius: 8px; width: 50px; height: 30px;');
options.appendChild(reset);

reset.addEventListener('click', () => {
    for(i=0;i<updatedDivvy;i++){
        let square = document.getElementById(i);
        square.setAttribute('style', `height: ${updatedSquareSize}px; width: ${updatedSquareSize}px; border: 4px; border-radius: 2px; background-color: black;`);
    };
});


const gridSizing=document.createElement('div');
gridSizing.setAttribute('style', 'display: flex; justify-content: center; gap: 8px;');
options.appendChild(gridSizing);

const label=document.createElement('label');
label.setAttribute('style', 'align-self: center; font-family: Arial;')
label.textContent='Enter an integer between 1 and 100: ';
gridSizing.appendChild(label);

const input=document.createElement('input');
input.setAttribute('style', 'width: 50px; align-self: center;')
gridSizing.appendChild(input);

const resize=document.createElement('button');
resize.setAttribute('style', 'width: 60px; border-radius: 8px;');
resize.textContent='Resize';
gridSizing.appendChild(resize);

resize.addEventListener('click', () =>{
    let checkValue=parseInt(input.value);
    if(checkValue<1 || checkValue>100 || typeof checkValue !== 'number' || checkValue !== Math.floor(checkValue)){
        alert('Please enter an integer between 1 and 100!');
        return;
    }
    for(i=0;i<updatedDivvy;i++){
        let square = document.getElementById(i);
        grid.removeChild(square);
    }
    updatedGridSize=checkValue;
    input.value='';
    updatedDivvy=updatedGridSize * updatedGridSize;
    updatedSquareSize=gridDimensions/updatedGridSize;
    for(i=0;i<updatedDivvy;i++){
        let r=0;
        let g=0;
        let b=0;
        let rTenth=r*.1;
        let gTenth=g*.1;
        let bTenth=b*.1;
        let square=document.createElement('div');
        square.setAttribute('id', i);
        square.setAttribute('style', `height: ${updatedSquareSize}px; width: ${updatedSquareSize}px; border: 4px; border-radius: 2px; background-color: black;`);
        grid.appendChild(square);
        square.addEventListener('mouseenter', () =>{
            if(r<=0 && g<=0 && b<=0){
                r=Math.random()*255;
                g=Math.random()*255;
                b=Math.random()*255;
                rTenth=r*.1;
                gTenth=g*.1;
                bTenth=b*.1;
                square.setAttribute('style', `height: ${updatedSquareSize}px; width: ${updatedSquareSize}px; border: 4px; border-radius: 2px; background-color: rgb(${r}, ${g}, ${b});`);
            }else{
                r=r-rTenth;
                g=g-gTenth;
                b=b-bTenth;
                square.setAttribute('style', `height: ${updatedSquareSize}px; width: ${updatedSquareSize}px; border: 4px; border-radius: 2px; background-color: rgb(${r}, ${g}, ${b});`);
            }
        });
    }
    input.focus();
});

const grid=document.createElement('div');
grid.setAttribute('style', 'display: flex; justify-content: center; width: 640px; height: 640px; flex-wrap: wrap;')
container.appendChild(grid);

let gridDimensions=640;
let initialGridSize=16;
let divvy=initialGridSize * initialGridSize;
let initialSquareSize=gridDimensions/initialGridSize;

for(i=0;i<divvy;i++){
    let r=0;
    let g=0;
    let b=0;
    let rTenth=r*.1;
    let gTenth=g*.1;
    let bTenth=b*.1;
    let square=document.createElement('div');
    square.setAttribute('id', i);
    square.setAttribute('style', `height: ${initialSquareSize}px; width: ${initialSquareSize}px; border: 4px; border-radius: 2px; background-color: rgb(${r}, ${g}, ${b});`);
    grid.appendChild(square);
    square.addEventListener('mouseenter', () =>{
        if(r<=0 && g<=0 && b<=0){
            r=Math.random()*255;
            g=Math.random()*255;
            b=Math.random()*255;
            rTenth=r*.1;
            gTenth=g*.1;
            bTenth=b*.1;
            square.setAttribute('style', `height: ${initialSquareSize}px; width: ${initialSquareSize}px; border: 4px; border-radius: 2px; background-color: rgb(${r}, ${g}, ${b});`);
        }else{
            r=r-rTenth;
            g=g-gTenth;
            b=b-bTenth;
            square.setAttribute('style', `height: ${initialSquareSize}px; width: ${initialSquareSize}px; border: 4px; border-radius: 2px; background-color: rgb(${r}, ${g}, ${b});`);
        }
    });
}

let updatedGridSize=initialGridSize;
let updatedDivvy=updatedGridSize * updatedGridSize;
let updatedSquareSize=gridDimensions/updatedGridSize;

