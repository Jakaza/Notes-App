
const mainContainer = document.getElementById('container');
let notes = [];

(function () {

    let notesCheck = JSON.parse(localStorage.getItem('notesFile'));


    if (!notesCheck) {
        notes = []
    }
    else {

        notes = [...notesCheck];

        notes.forEach(element => {

            addNotes(element);

        })


    }


}())




function addNotes(text = '') {

    //Create new text container

    let innerContainer = document.createElement('div');
    let toolsContainer = document.createElement('div');

    innerContainer.classList.add('note');
    toolsContainer.classList.add('tools');

    //Create The Container of hidden buttons save and clear text

    let buttonOne = document.createElement('div');
    buttonOne.classList.add('defaulty-buttons');

    let saveBtn = document.createElement('button');
    let clearBtn = document.createElement('button');

    saveBtn.textContent = 'Save';
    clearBtn.textContent = 'Clear';

    buttonOne.appendChild(saveBtn);
    buttonOne.appendChild(clearBtn);

    toolsContainer.appendChild(buttonOne);

    //Create The Container of hidden buttons edit and delete
    let buttonTwo = document.createElement('div');
    buttonTwo.classList.add('defaulty-buttons', 'hidden-buttons');

    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    editBtn.textContent = 'Edit';
    deleteBtn.textContent = 'Delete';

    buttonTwo.appendChild(editBtn);
    buttonTwo.appendChild(deleteBtn);

    toolsContainer.appendChild(buttonTwo);


    //Append tools container with buttons to the main text container

    innerContainer.appendChild(toolsContainer);


    //Create Text-Area 

    let textarea = document.createElement('textarea');

    innerContainer.appendChild(textarea);

    //Append all elemets to the main div (Container)

    mainContainer.appendChild(innerContainer);

    console.log(innerContainer);

    if (text) {
        textarea.innerHTML = text;
        textarea.disabled = true;
        textarea.style.fontSize = '16px';
        textarea.style.padding = '10px';

        buttonOne.classList.add('hidden-buttons');
        buttonTwo.classList.remove('hidden-buttons');
    }


    //Create save functionality 

    saveBtn.addEventListener('click', function () {

        if (!(textarea.value.trim()) == "") {

            notes.push(textarea.value);

            localStorage.setItem('notesFile', JSON.stringify(notes));



            textarea.disabled = true;
            textarea.style.fontSize = '16px';
            textarea.style.padding = '10px';

            buttonOne.classList.add('hidden-buttons');
            buttonTwo.classList.remove('hidden-buttons');

        }
    })


    editBtn.addEventListener('click', function () {


        textarea.disabled = false;
        textarea.style.fontSize = '1.2rem';
        textarea.style.padding = '0px';

        buttonOne.classList.remove('hidden-buttons');
        buttonTwo.classList.add('hidden-buttons');

    })

    deleteBtn.addEventListener('click', function (el) {

        // innerContainer.remove();
        let notesCheck = JSON.parse(localStorage.getItem('notesFile'));

        notesCheck.forEach(note => {

            // if((textarea.textContent) == note){

            //     alert()
            // }

        })

    })

}










