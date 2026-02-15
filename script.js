let todo={
    display: function(){
        const id=document.getElementById("user-input");
        fetch("https://jsonplaceholder.typicode.com/todos/"+id.value)
        .then((todo1)=>{ if(!todo1.ok){
            alert("Something went wrong please try again");
            return;}
            if(id.value>200){
                alert("There's no such todo with this id")
                return;   
            }

            return todo1.json()})
        .then((todocontent)=>{
               const {title,completed}=todocontent;
          document.getElementById("todo-title").textContent=title;
          if(completed===false){
            document.getElementById("todo-status").textContent="❎";
          }
          else{document.getElementById("todo-status").textContent="☑️";}
          console.log(todocontent) 
        })

        
    }};

document.getElementById("button1").addEventListener("click",
    function(){
        todo.display();
    }
)

document.getElementById("user-input").addEventListener("keyup",
    (e)=>{if(e.key==="Enter"){todo.display();}}
)