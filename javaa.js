
const bar = document.querySelector('.bar')
const closed = document.querySelector('.close')



bar.addEventListener('click', ()=> {
    links.style.display = 'flex'
    bar.style.display = 'none'
    closed.style.display = 'flex'
})

closed.addEventListener('click', ()=> {
    links.style.display = 'none'
    bar.style.display = 'flex'
    closed.style.display = 'none'
})
