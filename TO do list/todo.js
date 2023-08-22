
 let inputs= document.getElementById("input");
 let text= document.querySelector(".text");

 function Add(){
    if(inputs.value==" "){
        alert("PLease enter the task");
    }else{
        let newele=document.createElement("ul");
        newele.innerHTML= `${inputs.value}<button style="font-size:24px">DEL<i class="fa fa-trash-o"></i></button>`;
        text.appendChild(newele);
        inputs.value=" "; 
        newele.querySelector("Button").addEventListener("click",remove);
        function remove(){
            newele.remove()
        }
    }
 }
    