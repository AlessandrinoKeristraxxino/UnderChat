// script.js

let haveAccount = false;

const UI = Object.create({
    Text: {
        HTML: {
            hint: `<p class="hintPost"></p>`
        },
        title: document.getElementById('title'),
        subtitle: document.getElementById('subtitle'),
        pubPost: document.getElementById('pubPostTxt')
    },
    Input: {
        postTitle: document.getElementById('postTitleInp'),
        postBody: document.getElementById('postBodyInp')
    },
    Button: {
        submit: document.getElementById('submit')
    },
    hintContainer: document.querySelector('.hint-container'),
    postContainer: document.getElementById('post-container')
});

let username = 'Guest';

const init = (account) => {
    if (account === true) {
    } else {
        UI.Text.HTML['hint'] = `<p class="hintPost">Create an account for more options</p>`
        UI.hintContainer.insertAdjacentHTML('afterbegin', UI.Text.HTML.hint);
    }

    UI.Text['pubPost'].textContent = `Publish your ideas`;
    UI.Text['title'].textContent = `UnderChat`;
    UI.Text['subtitle'].textContent = `The social media of Undertale`;
    UI.Button['submit'].textContent = `Submit`;
}

UI.Button['submit'].addEventListener('click', (event) => {
    const postTitle = UI.Input['postTitle'].value;
    const postBody = UI.Input['postBody'].value;
    const postDate = new Date().toLocaleDateString();

    const post = `
        <div class="post">
            <div class="informations">
                <p class="post:user:name">${username}</p>
                <p class="post:date">${postDate}</p>
            </div>
            <h3 class="post:title">${postTitle}</h3>
            <p class="post:content">${postBody}</p>
        </div>
        <br />
    `;

    UI['postContainer'].insertAdjacentHTML('afterbegin', post);
});

document.addEventListener('DOMContentLoaded', (event) => {
    init(haveAccount);

    console.log('Page loaded');
});
