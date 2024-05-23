const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listContainer");

row.addEventListener('submit', (e) => {
    var li = document.createElement("li");
    var b = document.createElement("b");
    var input = document.createElement("input");

    e.preventDefault();
    if(!inputBox.value){
        alert("Please add to your list!");
    }
    else{
        listContainer.appendChild(li);

        input.type = "text";
        input.value = inputBox.value;
        input.setAttribute('readonly', 'readonly');
        li.appendChild(input);

        b.innerText = '\u270E';
        li.appendChild(b);

        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
        else if(e.target.tagName === "INPUT"){
            e.target.parentElement.classList.toggle("checked");
            e.target.classList.toggle("checked");
        }
        else if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            e.target.firstElementChild.classList.toggle("checked");
        }
    }, false);

    b.addEventListener('click', () => {
        if(b.innerText.toLowerCase() == "\u270E"){
            input.removeAttribute("readonly");
            input.focus();
            b.innerHTML = "\<";
        }
        else{
            input.setAttribute("readonly", "readonly");
            b.innerText = "\u270E";
        }
    })

})

function saveData(){
    // localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();