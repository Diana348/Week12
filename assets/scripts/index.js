const userName = document.querySelector('.username');
const userImage = document.querySelector('.userimage');
const userComment = document.querySelector('.usercomment');
const btn = document.querySelector('.button');

const userName_1 = document.querySelector('.username_1');
const userImage_1 = document.querySelector('.userimage_1');
const userCommen_1 = document.querySelector('.usercomment_1');


function changeFirstLetterName () {
    const userNameStr = userName.value;
    let changeName = userNameStr[0].toUpperCase() + userNameStr.slice(1).toLowerCase()
    return changeName;
}

function checkSpam () {
    const userCommentStr = userComment.value;
    const comment = userCommentStr.toLowerCase();
    const modComment = comment.replace("viagra", "***");
    return modComment
}

function createComment (evt) {
    evt.preventDefault();
    const userImageStr = userImage.value;
    userName_1.textContent = changeFirstLetterName();
    userCommen_1.textContent = checkSpam();
    userImage_1.src = userImageStr;
}

btn.addEventListener('click', createComment);