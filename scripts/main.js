var MyImage = document.querySelector('img');
MyImage.onclick = function(){
    var mySrc = MyImage.getAttribute('src');
    if (mySrc === 'images/usopp.jpg' ){
        MyImage.setAttribute('src', 'images/usopp_art.jpg')
    } else{
        MyImage.setAttribute('src', 'images/usopp.jpg')
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h6');
function setUserName(){
var myName = prompt('Please enter your name.');
localStorage.setItem('name', myName);
myHeading.textContent = 'Улыбнись, ' + myName + '<3';
}
if (!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Улыбнись, ' + storedName + '<3';
}
myButton.onclick = function(){
    setUserName();
}
