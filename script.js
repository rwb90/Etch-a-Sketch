    const grid = document.querySelector('.grid');
    let multiple = 8;
    let buttons = document.querySelectorAll('button');
    
    createGrid();

    function createGrid(){
        let percentage = 100/multiple;
        for(let i = 0; i < (multiple ** 2); i++){
            let gridBox = document.createElement('div');
            gridBox.setAttribute('class', 'gridBox');
            gridBox.setAttribute('style', 'outline: 2px solid black; aspect-ratio: 1/1; width: '+percentage+'%;');
            
            grid.appendChild(gridBox);
        }
        let gridBoxes = document.querySelectorAll('.gridBox');
        gridBoxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        }); 
        });
    }
  
    

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            while(grid.firstChild){
                grid.removeChild(grid.lastChild);
            }
            if(button.className == "8x8"){
                multiple = 8;
                createGrid();
            }
            else if(button.className == "16x16"){
                multiple = 16;
                createGrid();
            }
            else if(button.className == "32x32"){
                multiple = 32;
                createGrid();
            }
            else if(button.className == "64x64"){
                multiple = 64;
                createGrid();
            }
        });
    });

    
    
      
