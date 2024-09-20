let btn = document.getElementById('sas');

console.log(document.write('hello'))
onscroll = function(){
if(scrollY>=400){
    btn.style.display='block'
}
else{
    btn.style.display='none'
}

}
btn.onclick = function(){
    scroll({
     right:0,
     top:0,
     behavior:'smooth'

    })
}
