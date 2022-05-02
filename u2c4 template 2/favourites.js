// write js code here corresponding to favourites.html
var data =JSON.parse(localStorage.getItem("favourites"))
display(data)


function display(data){
    data.forEach(function(el,index){
        var row =document.createElement("tr")
        var no = document.createElement("td")
        no.innerText=el.matchno;
        var teamA = document.createElement("td")
    teamA.innerText=el.teamA;
        var teamB= document.createElement("td")
        teamB.innerText=el.teamB
        var date = document.createElement("td")
        date.innerText=el.date;
        var venue = document.createElement("td")
        venue.innertext=el.venue
        var fav =document.createElement("td")
        fav.innerText = "delete"
        fav.style.courser="pointer"
        fav.addEventListener("click", function(){
            remove(el,index)
        })
    
    row.append(no,teamA,teamB,date,venue,fav)
    document.querySelector("tbody").append(row)
    
    });
    function remove(el,index){
     data.splice(index,1)
       
        localStorage.setItem("favourites",JSON.stringify(data))
        window.location.reload()

    }
  

}