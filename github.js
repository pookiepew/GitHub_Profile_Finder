// Create GitHub ES6 class

class GitHub {
    constructor(){
        const clientID = require('./keys').clientID;
        const clientSecret = require('./keys').clientSecret;

        this.client_id = clientID;
        this.client_secret = clientSecret;
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // Create getUser() function
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        

        return {
            profile,
            repos
        }
    }
}