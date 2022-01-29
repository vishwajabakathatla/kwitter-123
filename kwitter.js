function login(){
    var name=document.getElementById("username").value;
    if (name.trim()!="")
    {
        localStorage.setItem("username",name);
        window.location="kwitter_room.html";   
    }  
}
