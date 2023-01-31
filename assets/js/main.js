document.querySelector("#add").addEventListener("click", ()=>{
    const input = document.querySelector("#list").value;
    if(input.trim()==""){
        alert("type a information")
    } else{
        document.querySelector("#create").innerHTML += `<div class="list-delete">
        <span>${input}</span>
        <button id="delete">remove</button>
    </div>`;
    document.querySelector("#list").value="";

    const removeTask = document.querySelectorAll("#delete");
    for (let i = 0; i<removeTask.length; i++){
        removeTask[i].onclick = function(){
            removeTask[i].parentNode.remove();
        }       

    }
    }
})