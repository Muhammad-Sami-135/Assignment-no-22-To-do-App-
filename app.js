var ulElement = document.getElementById("list");

function addItem() {
    
    var userInput = document.getElementById("userinput");

    if (userInput.value) {

        // create li Element in ul Element

        var liElement = document.createElement("li");

        var liText = document.createTextNode(userInput.value + " ");

        ulElement.appendChild(liElement);

        liElement.appendChild(liText);

        liElement.style.fontSize = "25px";

        liElement.style.textTransform = "capitalize";

        liElement.style.fontFamily = "arial";

        liElement.style.fontWeight = "bold";


        // create delete button in li Element

        var dltButton = document.createElement("button");

        var dltButtonText = document.createTextNode("Delete");

        dltButton.appendChild(dltButtonText);

        liElement.appendChild(dltButton);

        dltButton.setAttribute("onclick", "dltsingleItem(this)");

        dltButton.style.backgroundColor = "rgb(33, 73, 23)";

        dltButton.style.color = "white";

        dltButton.style.borderRadius = "8px";

        dltButton.style.margin = "5px 5px";

        dltButton.style.padding = "8px 10px";

        dltButton.style.cursor = "pointer";


        // create Edit button in li Element

        var editButton = document.createElement("button");

        var editButtonText = document.createTextNode("Edit");

        editButton.appendChild(editButtonText);

        liElement.appendChild(editButton);

        editButton.setAttribute("onclick", "editbtn(this)");

        editButton.style.backgroundColor = "rgb(33, 73, 23)";

        editButton.style.color = "white";

        editButton.style.borderRadius = "8px";

        editButton.style.margin = "5px 5px";

        editButton.style.padding = "8px 10px";

        editButton.style.cursor = "pointer";

        userInput.value = ""
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Input is not Feild!",
        });
    }
}

function dltAllItem() {
    ulElement.innerHTML = "";
}

function dltsingleItem(e) {
    e.parentNode.remove();
}

function editbtn(e) {
    var userupdateVal = prompt("Enter Your Update Value");

    e.parentNode.firstChild.nodeValue = userupdateVal;
}