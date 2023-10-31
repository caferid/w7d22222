let men = document.getElementById('men')
let sen = document.getElementById('sen')

let input = document.querySelector('#bir')
console.log(input);

men.addEventListener('click', () => {

    let pm = document.getElementById('pm')
    pm.innerHTML = input.checked

})


sen.addEventListener('click', () => {
    let x = Math.floor((Math.random() * 3) + 1);
    console.log(x);
    let ps = document.getElementById('ps')
    ps.innerHTML = x
})