const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");

const gh = new GitHub();
const ui = new UI();
allEvent();

function allEvent() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {
    const username = nameInput.value.trim();

    if (username === "") {
        alert("Geçerli kullanıcı adı gir!")
    } else {
        gh.getGitHubData(username)
            .then(r => {
                if (r.USER.message === "Not Found") {
                    ui.showAlert("Kullanıcı bulunamadı!");
                } else {
                    ui.addSearchedUser(username);
                    strg.addUserToStorage(username)
                    ui.showUserInfo(r.USER);
                    ui.showRepoInfo(r.REPO);
                }
            })
            .catch(err => ui.showAlert(err))
    }
    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched() {
    if (confirm("Emin misiniz?")) {
        strg.clearAll();
        ui.clearAllSearched();
    }
}

function getAllSearched() {
    const users = strg.getSearchedUsers();
    let result = "";
    users.forEach(user => {
        result += `
        <li class="list-group-item">${user}</li>
        `;
    });
    lastUsers.innerHTML = result;
}