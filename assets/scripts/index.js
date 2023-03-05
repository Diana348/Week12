const username = document.querySelector('.username').value;
const userimage = document.querySelector('.userimage').value;
const usercomment = document.querySelector('.usercomment').value;
const username_1 = document.querySelector('.username_1');
const userimage_1 = document.querySelector('.userimage_1');
const usercomment_1 = document.querySelector('.usercomment_1');
const btn = document.querySelector('.button');

function afterClick () {
    let name = username[0].toUpperCase() + username.slice(1).toLowerCase();
    username_1.textContent = name;

    let image = userimage;
    userimage_1.src = image;
    
    function searchSpam (){
        let comm = usercomment.toLowerCase();

        if((comm.includes('viagra') === true) && (comm.includes('xxx') === true)){
            return comm.return('viagra', '***');
        } else {
            return comm;
        }
    }
};


btn.addEventListener('click', afterClick());

console.log (searchSpam);