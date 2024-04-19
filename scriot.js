const container = document.createElement("div");
container.classList.add("container")

const left_side = document.createElement("div")
left_side.classList.add("left_turn")

const userss = document.createElement("div")
userss.classList.add("users")

const userBox = document.createElement("div");
userBox.classList.add("user_box");

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
        reload(data.slice(0, 10));
    });

function reload(users) {
    users.forEach((user) => {

        const story = document.createElement("div");
        story.classList.add("storys");

        const avatar = document.createElement("img");
        avatar.classList.add("avatar");
        avatar.src = "./img/radmir.jpg";
        avatar.alt = "";

        const span = document.createElement("span");
        span.classList.add("nick");

        if (user.name.length > 10) {
            span.innerHTML = user.name.slice(0, 12) + '...'
        } else {
            span.innerHTML = user.name
        }

        story.appendChild(avatar);
        story.appendChild(span);

        userBox.appendChild(story);

        userss.append(userBox)

    })
}



fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.json())
    .then((data) => {
        reloadPosts(data.slice(0, 10))
    })

const post = document.createElement('div');
post.classList.add('post');

function reloadPosts(photos) {
    photos.forEach((phot) => {

        const poster = document.createElement('div');
        poster.classList.add('poster');

        const postHeader = document.createElement('div');
        postHeader.classList.add('post_header');

        const postData = document.createElement('div');
        postData.classList.add('postData');

        const postAvatar = document.createElement('div');
        postAvatar.classList.add('post_avatar');
        const avatarImg = document.createElement('img');
        avatarImg.src = phot.url;
        avatarImg.alt = "";
        postAvatar.appendChild(avatarImg);

        const postNick = document.createElement('div');
        postNick.classList.add('post_nick');
        const nameSpan = document.createElement('span');
        nameSpan.classList.add('name');
        nameSpan.textContent = "Radmir";
        const countrySpan = document.createElement('span');
        countrySpan.classList.add("country");
        countrySpan.textContent = "Samararqand";
        postNick.appendChild(nameSpan);
        postNick.appendChild(countrySpan);

        const dotButton = document.createElement("button");
        dotButton.classList.add('dot');
        const dotImg = document.createElement("img");
        dotImg.src = "./img/dou.png";
        dotImg.alt = "";
        dotButton.appendChild(dotImg);

        postData.appendChild(postAvatar);
        postData.appendChild(postNick);
        postData.appendChild(dotButton);

        postHeader.appendChild(postData);




        const postPhoto = document.createElement('div');
        postPhoto.classList.add('post_photo');
        const photoImg = document.createElement('img');
        photoImg.src = phot.url;
        photoImg.alt = "";
        postPhoto.appendChild(photoImg);

        const postInfo = document.createElement('div');
        postInfo.classList.add('post_info');

        const reacts = document.createElement('div');
        reacts.classList.add('reacts');

        const leftReacts = document.createElement('div');
        leftReacts.classList.add('left_reacts');

        const likeButton = document.createElement('button');
        const likeImg = document.createElement('img');
        likeImg.src = './img/like.png';
        likeImg.setAttribute('alt', '');
        likeButton.appendChild(likeImg);

        const commentButton = document.createElement('button');
        const commentImg = document.createElement('img');
        commentImg.src = './img/comment.png';
        commentImg.setAttribute('alt', '');
        commentButton.appendChild(commentImg);

        const planButton = document.createElement('button');
        const planImg = document.createElement('img');
        planImg.src = './img/plan.png';
        planImg.setAttribute('alt', '');
        planButton.appendChild(planImg);

        leftReacts.appendChild(likeButton);
        leftReacts.appendChild(commentButton);
        leftReacts.appendChild(planButton);

        const rightReacts = document.createElement('div');
        rightReacts.classList.add('right_reacts');

        const addButton = document.createElement('button');
        const addImg = document.createElement('img');
        addImg.src = './img/Add.svg';

        addButton.appendChild(addImg);

        rightReacts.appendChild(addButton);

        reacts.appendChild(leftReacts);
        reacts.appendChild(rightReacts);

        const postLikes = document.createElement('span');
        postLikes.classList.add('post_likes');
        postLikes.textContent = '9,999 likes';

        const postWrite = document.createElement('div');
        postWrite.classList.add('post_write');

        const boldText = document.createElement('b');
        boldText.textContent = 'Radmir';
        const paragraph = document.createElement('p');
        paragraph.textContent = phot.title;

        postWrite.appendChild(boldText);
        postWrite.appendChild(paragraph);

        const postComments = document.createElement('div');
        postComments.classList.add('post_comments');

        const comments1 = document.createElement('div');
        comments1.classList.add('comments');

        const comment1 = document.createElement('div');
        comment1.textContent = 'Lorem ipsum dolor sit amet.';
        comments1.appendChild(comment1);

        const comments2 = document.createElement('div');
        comments2.classList.add('comments');

        const comment2 = document.createElement('div');
        comment2.textContent = 'Lorem ipsum dolor sit amet.';
        comments2.appendChild(comment2);

        const allComments = document.createElement('div');
        allComments.classList.add('all_comments');

        const viewAllComments = document.createElement('span');
        viewAllComments.textContent = 'View all comments...';

        allComments.appendChild(viewAllComments);

        postComments.appendChild(comments1);
        postComments.appendChild(comments2);
        postComments.appendChild(allComments);

        const write = document.createElement('div');
        write.classList.add('write');

        const writeSmileButton = document.createElement('button');
        writeSmileButton.classList.add('write_smile');
        const smileImg = document.createElement('img');
        smileImg.setAttribute('src', './img/smiley_icon-icons.com_69900.svg');
        smileImg.setAttribute('alt', '');
        writeSmileButton.appendChild(smileImg);

        const commentInput = document.createElement('input');
        commentInput.setAttribute('type', 'text');
        commentInput.setAttribute('placeholder', 'add a comment...');

        const sendPostButton = document.createElement('button');
        sendPostButton.classList.add('send_post');
        sendPostButton.textContent = 'Post';
        write.appendChild(writeSmileButton);
        write.appendChild(commentInput);
        write.appendChild(sendPostButton);

        postInfo.appendChild(reacts);
        postInfo.appendChild(postLikes);
        postInfo.appendChild(postWrite);
        postInfo.appendChild(postComments);
        postInfo.appendChild(write);

        poster.append(postHeader, postPhoto, postInfo)
        post.appendChild(poster);

        let like = false

        likeButton.onclick = () => {
            if (like === false) {
                likeImg.src = './img/heart2.png'
                like = true
            } else {
                likeImg.src = './img/like.png'
                like = false
            }
        }

        let add = false

        addButton.onclick = () => {
            if (add === false) {
                addImg.src = './img/favorite.png'
                add = true
            } else {
                addImg.src = './img/Add.svg'
                add = false
            }
        }
    })
}


left_side.append(userss, post);
container.append(left_side)
document.body.append(container)


let profile = document.querySelector('.head_circle')

profile.onclick = () => {
    window.location.href = "./index2.html";
}