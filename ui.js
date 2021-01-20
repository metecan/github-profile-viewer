class UI {
    constructor() {
        this.PROFLIE_DIV = document.getElementById("profile");
        this.REPO_DIV = document.getElementById("repos");
        this.LAST_USERS = document.getElementById("last-users");
        this.INPUT_FIELD = document.getElementById("githubname");
        this.CARD_BODY = document.querySelectorAll(".card-body")[0];
    }

    clearInput() {
        this.INPUT_FIELD.value = "";
    }
    showUserInfo(user) {
        this.PROFLIE_DIV.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
            <div div class="col-md-4">
                <a href="${user.html_url}" target = "_blank">
                <img class="img-fluid mb-2" src="${user.avatar_url}"> </a>
                <hr>
                <div id="fullName"><strong> ${user.name}</strong></div>
                <hr>
                <div id="bio">${user.bio}</div>
            </div>
            <div class="col-md-8">
                <button class="btn btn-secondary">
                      Takipçi  <span class="badge badge-light">${user.followers}</span>
                </button>
                <button class="btn btn-info">
                     Takip Edilen  <span class="badge badge-light">${user.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repolar  <span class="badge badge-light">${user.public_repos}</span>
                </button>
                <hr>
                <ul class="list-group">
                    <li class="list-group-item borderzero">
                        <img src="images/company.png" width="30px"> <span id="company">${user.company}</span>   
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/location.png" width="30px"> <span id = "location">${user.location}</a>
                    </li>
                    <li class="list-group-item borderzero">
                        <img src="images/mail.png" width="30px"> <span id="mail">${user.email}</span>
                    </li>
                </ul>
            </div>
                   
                
        </div>
        </div>
        
        `;
    }
    showAlert(msg) {
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert alert-danger";
        alertDiv.role = "alert";
        alertDiv.textContent = msg;

        this.CARD_BODY.appendChild(alertDiv);
        setTimeout(() => alertDiv.remove(), 2000);

    }
    showRepoInfo(repos) {
        this.REPO_DIV.innerHTML = "";
        repos.forEach((repo, index) => {
            this.REPO_DIV.innerHTML += `
            <div class="mb-2 card-body">
                <div class="row d-flex">
                    <div class="col-md-3">
                    <span>${index+1}. repo:</span> 
                    <a href="${repo.html_url}" target="_blank" id="repoName">${repo.full_name}</a>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-secondary">
                            Starlar  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                        </button>
    
                        <button class="btn btn-info">
                            Forklar  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                        </button>
    
                    </div>
                </div>
            </div>
            `;
        });
    }
    addSearchedUser(username) {
        let users = strg.getSearchedUsers();
        if (users.indexOf(username) === -1) {
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = username;

            this.LAST_USERS.appendChild(li)
        }
    }
    clearAllSearched() {
        while (this.LAST_USERS.firstChild !== null) {
            this.LAST_USERS.firstChild.remove();
        }
    }
}