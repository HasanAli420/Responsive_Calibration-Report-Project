
document.getElementById("menu").addEventListener('click', function(){
    document.getElementById("side").classList.add('active')
});

document.getElementById("close").addEventListener('click', function(){
    document.getElementById("side").classList.remove('active')
})