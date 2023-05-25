//your JS code here. If required.
const user = document.getElementById('username');
const pass = document.getElementById('password');
const check = document.getElementById('checkbox');
const submit = document.getElementById('submit');
const log = document.getElementById('existing');

submit.addEventListener('click', (e)=>{
    e.preventDefault()
    if(check.checked){
        localStorage.setItem('username', user.value)
        localStorage.setItem('password', pass.value)
    }
	if(!check.checked){
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
    alert(`Logged in as ${user.value}`)
})

if(localStorage.getItem('username')){
    log.style.display = 'inline-block';
    log.addEventListener('click', ()=>{
        alert(`Logged in as ${localStorage.getItem('username')}`);
    })
}