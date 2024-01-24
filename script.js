    const grid = document.querySelector('.grid');
    let multiple = 8;
    let buttons = document.querySelectorAll('button');
    let color = "black";
    
    createGrid();

    function createGrid(){
        let percentage = 100/multiple;
        for(let i = 0; i < (multiple ** 2); i++){
            let gridBox = document.createElement('div');
            gridBox.setAttribute('class', 'gridBox');
            gridBox.setAttribute('style', 'aspect-ratio: 1/1; width: '+percentage+'%;');
            
            grid.appendChild(gridBox);
        }
        let gridBoxes = document.querySelectorAll('.gridBox');
        gridBoxes.forEach((box) => {
        box.addEventListener('mouseover', () => {
            
            if(color == "random"){
                box.style.backgroundColor = ''+random_rgba()+'';
            }
            else if(color == "black"){
                box.style.backgroundColor = "black";
            }
        }); 
        });
    }
    
    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 1 + ')';
    }
    
    

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(button.parentElement.className == "gridButtons"){
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
            }
            else if(button.className == "black"){
                color = "black";
            }
            else if(button.className == "random"){
                color = "random";
            }
            
        });
    });

    
    
      
