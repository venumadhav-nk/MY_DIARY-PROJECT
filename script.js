//selecting popup-box,popup-overlay,popup-button
var popupoverlay=document.querySelector('.popup-overlay')
var popupbox =document.querySelector('.popup-box')
var addpopupbutton =document.getElementById('add-popup-button')


addpopupbutton.addEventListener('click',function(){
    popupoverlay.style.display='block'
    popupbox.style.display='block'
})


//selecting cancle button
var canclebutton=document.getElementById("cancle-popup")

canclebutton.addEventListener('click',function(event){
    event.preventDefault()
    popupoverlay.style.display='none'
    popupbox.style.display='none'
})

///selecting  container,add-book,book-title-input,book-author-input,book-description-input
var container = document.querySelector('.container')
var addbook= document.getElementById('add-book')
var booktitleinput = document.getElementById('book-title-input')
var bookauthorinput =document.getElementById('book-author-input')
var bookdecsinput = document.getElementById('book-description-input')

addbook.addEventListener('click',function(event){
    event.preventDefault()

    var div =document.createElement('div')
    div.setAttribute('class','book-container')
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdecsinput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display='none'
    popupbox.style.display='none'
})

function deletebook(event)
{
    event.target.parentElement.remove()
}