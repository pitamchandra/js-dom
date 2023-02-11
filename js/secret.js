
document.getElementById('confirm').addEventListener('keyup', function(event){
    if(event.target.value === 'delete'){
        document.getElementById('delete_btn').removeAttribute('disabled');
    }
    else{
        document.getElementById('delete_btn').setAttribute('disabled', true)
    }
})


document.getElementById('delete_btn').addEventListener('click', function(){
    const secret = document.getElementById('secret_text');
    secret.style.display = "none";
    const confirm = document.getElementById('confirm');
    confirm.value= ''
})