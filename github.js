class GitHub {
    constructor() {
        this.URL = "https://api.github.com/users/";
    }

    async getGitHubData(username) {
        const responseUser = await fetch(this.URL + username);
        const responseRepo = await fetch(this.URL + username + "/repos")

        const UserData = await responseUser.json();
        const RepoData = await responseRepo.json();

        return {
            USER: UserData,
            REPO: RepoData
        }
    }
}