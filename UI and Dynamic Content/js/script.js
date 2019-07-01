// GETTING REFERENCES
let item = document.getElementById("item");
let add-Btn = document.getElementById("add");
let ul = document.getElementById("list");
let err = document.querySelector(".error");

function addItems() {
    
    // collect the value
    let val = item.value;
    
    // trim the white space
    val = val.trim();
    
    if (val.length !== 0){
    
    // create the list item
    let li = document.createElement("li");
    
    // add the content to <li>
    li.innerText = val;
    
    // <li>....</li> appended to hard-coded <ul>....</ul>    
    ul.appendChild(li);
    
    // access text field and overwrite the existing value with ""
    item.value = "";
    // sends cursor back inside the text block
    item.focus();    
        
    } else {
        err.innerText = "Please enter the value and then click the button";
    }
}
addBtn.addEventListener("click",addItems);
