import axios from "axios";

class apiService {

    apiKey = '92ec2310a4mshff3d44ae1f7662ap127a45jsn83ef4fcbd902';
    apiHost = 'api-football-v1.p.rapidapi.com';

    getLeagueData() {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
            params: { country: 'England' },
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': this.apiHost
            }
        };

        return axios.request(options);
    }

    getStandingsbyLeagueid(id) {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
            params: { season: '2022', league: id },
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': this.apiHost
            }
        };

        return axios.request(options);
    }

    getTeamPlayerStatsbyTeamid(id) {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            params: { team: id, season: '2022' },
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': this.apiHost
            }
        };

        return axios.request(options);
    }

    getFixturesbyTeamid(teamId, leagueId) {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
            params: { season: '2022', team: teamId, league: leagueId },
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': this.apiHost
            }
        };

        return axios.request(options);
    }

    getPlayerStatsbyPlayerid(id) {
        const options = {
            method: 'GET',
            url: 'https://api-football-v1.p.rapidapi.com/v3/players',
            params: { id: id, season: '2022' },
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': this.apiHost
            }
        };

        return axios.request(options);
    }
}

export default new apiService()