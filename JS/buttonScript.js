function displayMessage(){
    alert('Hello')
}

// const button = document.querySelector('button')
// const btn = document.querySelector('#btn-1');
// btn.addEventListener('click', addParagraph);

document.querySelector('button').onclick=addParagraph;

function addParagraph(){
    const newElement = document.createElement('p');
    newElement.textContent='New Paragraph';
    // document.body.appendChild(newElement);
    document.querySelector('.container').appendChild(newElement);
}

function removeParagraph(){
    const list = document.querySelector('.container');
    if (list.children.length != 0)
    {
        list.removeChild(list.lastChild);
    }
}