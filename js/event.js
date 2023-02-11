
// one of best option
// important
function whiteBg(){
    document.body.style.backgroundColor = 'white';
}

function blueBg(){
    document.body.style.backgroundColor = "blue";
}

let blueBgBtn = document.getElementById("blueBg");

blueBgBtn.onclick = blueBg;
// important
// best final option

document.getElementById("pinkBg").addEventListener('click', function(){
    document.body.style.backgroundColor = 'pink';
})

document.getElementById('update_btn').addEventListener('click', function(){
    const updateText = document.getElementById('update_text');
    const input = document.getElementById('input');
    let inputValue = input.value;
    updateText.innerText = inputValue;
    input.value = '';
    
})

// how to comment process in post

document.getElementById('post_btn').addEventListener('click', function(){
    const commentBox = document.getElementById('comment_box');
    const comment = commentBox.value

    const commentArea = document.getElementById('comment_area');
    let p = document.createElement('p');
    p.innerText = comment;
    commentArea.appendChild(p)
    commentBox.value = '';

})