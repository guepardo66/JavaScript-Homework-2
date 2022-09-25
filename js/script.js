let userFormDOM = document.querySelector('#liveToastBtn') 
userFormDOM.addEventListener("click",formHandler)
let alertDOM = document.querySelector("#alert")
const ALERT = (message) => `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>${message}</strong> 
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`

function formHandler(event){
    event.preventDefault()
    const TASK = document.querySelector("#task")
    if (TASK.value){
        addItem(TASK.value)
        TASK.value = ""
        alertDOM.innerHTML = ALERT("Eklendi")
    } else {
        console.log("hata")
        alertDOM.innerHTML = ALERT("Boş bilgi eklenemez")
    }
}


let listDOM = document.querySelector("#list")
function addItem(task){
    let liDOM = document.createElement('li')
    let button = `<button class="float-right" id="close" onclick="parentElement.remove()">x</button>`
    liDOM.innerHTML = `${task+button}`
    listDOM.append(liDOM)
}











































// let info = document.querySelector("#task")
// let ulDOM = document.querySelector("ul#list")
// let liDOM = document.createElement('li')

// let alert = document.querySelector("#alert")
// let emptyAreaMessage = `<div class="mr-1" style="position: relative">
// <div style="position: absolute; top: 0; right: 0">
//   <div id="liveToast" class="toast error hide" role="alert" aria-live="assertive" aria-atomic="true"
//     data-delay="4000">
//     <div>
//       <button type="button" class="close" data-dismiss="toast" aria-label="Close">
//         <span>&times;</span>
//       </button>
//     </div>
//     <div class="toast-body">Listeye boş ekleme yapamazsınız!</div>
//   </div>
// </div>
// </div>`

// let button = document.querySelector("#liveToastBtn")
// button.addEventListener("click",addFunction)

// function addFunction(event){
//     event.preventDefault()
//     const info = document.querySelector("#task") 

//     if (info.value){
//         console.log(info.value)
//         addItem
//         ulDOM.append(liDOM)
//     } else {
//         alert.innerHTML = emptyAreaMessage
//         console.log("hatalı giriş")
//     }
// }