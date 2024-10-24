var productcontainer=document.querySelector(".nextsec");
var search=document.getElementById("search");
var porductlist=productcontainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var entervalue=event.target.value.toUpperCase();
    for(count=0;count<porductlist.length;count=count+1){
        var name=porductlist[count].querySelector("p").textContent;
        if(name.toUpperCase().indexOf(entervalue)<0){
            porductlist[count].style.display="none";
        }
        else{
            porductlist[count].style.display="block";
        }
    }
})