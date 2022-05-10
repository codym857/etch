function generateGrid(sideLength){
    const container = document.querySelector('#etch-container');

    for(let i = 0; i < sideLength; i++){
        //generate rows
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0; j < sideLength; j++){
            const block = document.createElement('div');
            block.classList.add('block');
            block.addEventListener('mouseover', function(){colorBlock(block)});
            row.appendChild(block);
        }
        container.appendChild(row);
    }
}

function colorBlock(block){
    block.classList.toggle('colored');
}

generateGrid(16);

const blocks = document.querySelectorAll('div.block');