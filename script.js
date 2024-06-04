// Getting data from the form
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");

// Create array to store tasks
const lists = [];

row.addEventListener('submit', e => {
    // Prevents page from reloading
    e.preventDefault();

    // Making sure input field is !empty
    if (inputBox.value.trim() === '') {
        alert("Please add to your list!!!")
    }
    else{
        // Adding data to bottom of the array
        lists.push(inputBox.value);

        // Clearing input field & displaying the list
        inputBox.value = '';
        showList();
    }
})

// Making the showList function
function showList() {
    clearList(listContainer);

    // Displaying each element with a loop
    lists.forEach(list => {
        // Creating, initializing, and adding an li element to the listContainer
        const li = document.createElement('li');
        listContainer.appendChild(li);

        // Creating, initializing, and adding an input to li element
        const input = document.createElement('input');
        input.setAttribute('readonly', 'readonly');
        input.value = list;
        li.appendChild(input);

        // Adding checkbox functionalities
        listContainer.addEventListener("click", e =>{
            if(e.target.tagName === "INPUT"){
                e.target.parentElement.classList.toggle("checked");
                e.target.classList.toggle("checked");
            }
            else if(e.target.tagName === "LI"){
                e.target.classList.toggle("checked");
                e.target.firstElementChild.classList.toggle("checked");
            }
        }, false);
        
        // Creating, initializing, and adding edit button to li element
        const b = document.createElement('i');
        b.innerText = '\u270E';
        li.appendChild(b);
        
        // Adding functionality to edit button using an if statement
        b.addEventListener('click', () => {
            if(b.innerText.toLowerCase() == "\u270E"){
                input.removeAttribute("readonly");
                b.classList.add("far", "fa-save");
                input.focus();
                b.innerHTML = '';
            }
            else{
                lists.splice(lists.indexOf(list), 1, input.value);
                input.setAttribute("readonly", "readonly");
                b.classList.remove("far", "fa-save");
                b.innerText = '\u270E';
            }
        })

        // Creating and adding delete button to li element
        const span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);

        span.addEventListener('click', (e) => {
            lists.splice(lists.indexOf(list), 1);
            e.target.parentElement.remove();
        })
    })
}

function clearList(element) {
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}
showList();