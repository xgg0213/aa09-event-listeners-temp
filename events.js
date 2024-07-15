// Your code here 
document.addEventListener('DOMContentLoaded', (e) => {
    window.alert('DOM has loaded');

    const redInput = document.getElementById('red-input');

    redInput.addEventListener('input', handleRed);

    const addLiButton = document.getElementById('add-item');

    const ul = document.querySelector('ul');

    addLiButton.addEventListener('click', addLi);

    const colorSelect = document.getElementById('color-select');

    colorSelect.addEventListener('input', changeColor);

    addEvents();

    // remove below for bonus part 1
    // const removeEvents = document.getElementById('remove-listener');

    // removeEvents.addEventListener('click', (e) => {
    //     redInput.removeEventListener('input', handleRed);
    //     addLiButton.removeEventListener('click', addLi);
    //     colorSelect.removeEventListener('input', changeColor);

    //     window.alert('events removed');
    // })

    // add this for bonus part 1
    const removeEventsButton = document.getElementById('remove-listners');

    removeEventsButton.addEventListener('click', removeEventsButton);

    // bonus part: first need to add a button in the index.html as add-listners
    // with this, need to remove redInput/addLiButton/colorSelect.addEventListner(xyz)
    // and remove all the const redInput/addLiButton/colorSelect under the addEvents function
    // and add addEvents before const removeEvents line
    const addEventsButton = document.getElementById('add-listners');

    addEventsButton.addEventListner('click', addEventsButton);

    // bonus part 2
    const newSection = document.createElement('section');
    const newDiv = document.createElement('div');

    newDiv.addEventListener("mouseover", (e) => {
        newDiv.innerText('Hovered over');
    })

    newSection.appendChild(newDiv);

    document.body.appendChild(newSection);

    //bonus part 3: need to research on the specifics here
    document.addEventListener('keypress', (e) => {
        if (e.keyCode === 32) {
            window.alert('space!')
        }
    })
    

})

//////////////////////////
// bonus
const removeEvents = () => {
    const redInput = document.getElementById('red-input');
    const addLiButton = document.getElementById('add-item');
    const colorSelect = document.getElementById('color-select');

    redInput.removeEventListener('input', handleRed);
    addLiButton.removeEventListener('click', addLi);
    colorSelect.removeEventListener('input', changeColor);

    window.alert('events have been removed')
}

const addEvents = (redInput, addLiButton, colorSelect) => {
    const redInput = document.getElementById('red-input');
    const addLiButton = document.getElementById('add-item');
    const colorSelect = document.getElementById('color-select');

    redInput.addEventListener('input', handleRed);
    addLiButton.addEventListener('click', addLi);
    colorSelect.addEventListener('input', changeColor);
}
///////////////////////////////

const handleRed = (event) => {
    if(event.target.value === 'red') {
        event.target.style.backgroundColor = 'red';
    } else {
        event.target.style.backgroundColor = 'transparent';
    }
}

const addLi = (event) => {
    const ul = document.querySelector('ul');
    const input = document.getElementById('list-add');
    const li = document.createElement('li');

    li.innerText = input.value;

    ul.appendChild(li);
}

const changeColor = (event) => {
    const section = document.getElementById('section-3');

    section.style.backgroundColor = event.target.value;
}

