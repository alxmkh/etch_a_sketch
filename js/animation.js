function drawGrid(count) {
    if (count > 100 || count < 1) {
        return;
    }
    var hCell = 460/count;
    var wCell = 460/count;
    var containerRow = '';
    var containerCol = '';

    for (let i = 0; i < count; i++) {
        containerRow = document.querySelector('#gridSpace');
        myRow = document.createElement('div');
        myRow.classList.add('myRow' + i);    
        containerRow.appendChild(myRow);
        
        for (let j = 0; j < count ; j++) {
            containerCol = document.querySelector('.myRow' + i);
            myCol = document.createElement('div');
            myCol.classList.add('myCell');   
            myCol.style.height = hCell + 'px';
            myCol.style.width = wCell + 'px';
            containerCol.appendChild(myCol);     
        }
    }        
}

function deleteChild() { 
    var e = document.querySelector("#gridSpace"); 
    e.innerHTML = ""; 
} 

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function handlerColor() {
    if (event.type == 'mouseover') {
      event.target.style.background = getRandomColor();
    }
    if (event.type == 'mouseout') {
      event.target.style.background = getRandomColor();
  }
}

function handlerGray() {
    if (event.type == 'mouseover') {
      event.target.style.background = "Gray";
    }
    if (event.type == 'mouseout') {
      event.target.style.background = "Gray";
  }
}
  
submitButton.addEventListener('click', function() {
    
    deleteChild();
    var inputValue = document.getElementById("inputSize").value;
    drawGrid(inputValue);
    document.getElementById("gridSpace").hidden = false;
    
})

colorButton.addEventListener('click', function() {
    gridSpace.onmouseover = gridSpace.onmouseout = function(){
        handlerColor();
    }
});

grayButton.addEventListener('click', function() {
    gridSpace.onmouseover = gridSpace.onmouseout = function(){
        handlerGray();
    }
})

