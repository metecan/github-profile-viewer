class strg {
    static getSearchedUsers() {
        let users;
        if (localStorage.getItem("searched") === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }
    static addUserToStorage(username) {
        let users = this.getSearchedUsers();
        if (users.indexOf(username) === -1) {
            users.push(username);
        }
        localStorage.setItem("searched", JSON.stringify(users));
    }
    static clearAll() {
        localStorage.removeItem("searched");
    }
}