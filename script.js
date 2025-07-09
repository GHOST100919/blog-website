let button = document.querySelectorAll('.details')

let container = document.createElement('p')
container.style.colorblue

button.forEach(function(btn){
    btn.addEventListener('click', async function(){
        btn.textContent = 'DETAILS NOT AVAILABLE NOW'
        sessionStorage()
    })
})