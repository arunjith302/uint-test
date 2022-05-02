// write js code here corresponding to matches.html
var data =JSON.parse(localStorage.getItem("schedule"))
favr =JSON.parse(localStorage.getItem("favourites"))||[]


display(data)
function filtering(){
    var selected = document.querySelector("#filterVenue").value;
    console.log(selected)
     var filterd = data.filter(function(el){
         return (el.venue==selected) 
 
         
     })
     console.log(filterd)
     display(filterd)
 }

function display(data){
    document.querySelector("tbody").innerHTML=""






    data.forEach(function(el){

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
        venue.innerText=el.venue
        var fav =document.createElement("td")
        fav.innerText = "add favourites"
        fav.addEventListener("click", function(){
            mark(el)
        })
    
    row.append(no,teamA,teamB,date,venue,fav)
    document.querySelector("tbody").append(row)
    
    });
    function mark(el){

        favr.push(el);
        localStorage.setItem("favourites",JSON.stringify(favr))

    }
  

}