// Getting elements from the form
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");

// Create array to store tasks
var lists = [];

    row.addEventListener('submit', (e) => {
    // Creating HTML elements for tasks with JS
    var li = document.createElement("li");
    var b = document.createElement("b");
    var input = document.createElement("input");


        // Preventing refresh of page upon submit
    e.preventDefault();
    if(!inputBox.value){
        // Making sure input field !empty
        alert("Please add to your list!");
    }
    else{

        // Adding JS element to page
        listContainer.appendChild(li);

        // Creating, initializing, and adding input box to li element
        input.type = "text";
        input.value = inputBox.value;
        input.setAttribute('readonly', 'readonly');
        li.appendChild(input);

        // Creating, initializing, and adding edit button to li element
        b.innerText = '\u270E';
        li.appendChild(b);

        // Creating and adding delete button to li
        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);

        // Clearing and saving input box values upon submittion
        saveData();
        inputBox.value = '';
    }

    // Adding functionalities to buttons with if statements
    listContainer.addEventListener("click", function(e){
        // Delete button
        if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
        // Input box
        else if(e.target.tagName === "INPUT"){
            e.target.parentElement.classList.toggle("checked");
            e.target.classList.toggle("checked");
        }
        // Check-box
        else if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            e.target.firstElementChild.classList.toggle("checked");
        }
    }, false);

    // Adding functionality to edit button using an if statement
    b.addEventListener('click', () => {
        if(b.innerText.toLowerCase() == "\u270E"){
            input.removeAttribute("readonly");
            input.focus();
            b.innerHTML = '\u1f5ab';
        }
        else{
            input.setAttribute("readonly", "readonly");
            b.innerText = "\u270E";
        }
    })

    // Adding data to the array
    function saveData(){
        lists.push(inputBox.value);
    }
    // Displaying the array, but its !working
    function showTask(){
        console.log(lists);
    }
    showTask();
})