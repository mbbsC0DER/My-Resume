let form = document.querySelector("form")
let i = 1 ;

form.addEventListener("submit" , function(e) {
    e.preventDefault();
    
    let task = document.querySelector("#task-add")
    let new_input = document.createElement("input")
    let new_label = document.createElement("label")
    // let item = document.querySelector(".item")
    let new_div = document.createElement("div")
    let fieldset = document.querySelector("fieldset")
    let del = document.createElement("button")

    let task_item = task.value
    console.log(task_item)
    new_label.innerText = task_item;
    new_label.setAttribute("for" , `item${i}` )
    new_input.setAttribute("id",`item${i}`)
    new_input.setAttribute("type" , "checkbox");
    new_div.setAttribute("class" , "item");
    del.innerText = "Delete"
    del.setAttribute("class" , "delete");
    del.style.marginLeft = "50px" ;
    fieldset.appendChild(new_div);
    new_div.appendChild(new_input)  
    new_div.appendChild(new_label)
    new_div.appendChild(del)

    console.log("here")
    i += 1 ;
    task.value = " ";
})

let form2 = document.querySelector(".delete")
form2.addEventListener("submit" , function(e){
    e.preventDefault();
    console.log(e.target)
    // e.target.remove();
})