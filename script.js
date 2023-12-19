document.addEventListener('DOMContentLoaded', ()=>{
    const socket = io()
    const form = document.querySelector('form')
    const input = document.querySelector('textarea')
    const messages = document.getElementById('con-box')
    form.addEventListener('submit', e=>{
        e.preventDefault()
        if (input.value){
            socket.emit('chat message',input.value);
            input.value= ''
        }
    })
    socket.on('chat message', msg=>{
        const p = document.createElement('p')
        p.textContent = msg
        messages.appendChild(p)
    })
})
