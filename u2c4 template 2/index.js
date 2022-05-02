// write js code here corresponding to index.html
// You should add submit event on the formdocumeb
document.querySelector("#masaiForm").addEventListener("submit",data)
var arr = JSON.parse(localStorage.getItem("schedule"))||[]

function data(){
event.preventDefault()

  var matchobj ={
    matchno : masaiForm.matchNum.value,
    teamA   : masaiForm.teamA.value,
    teamB   : masaiForm.teamB.value,
    date    : masaiForm.date.value,
    venu  : masaiForm.venue.value

}
arr.push(matchobj)
localStorage.setItem("schedule",JSON.stringify(arr))
}