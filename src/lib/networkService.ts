import config from './config';
import { wrapServiceResult } from './commonService';

async function fetchAllRepos(username: String) {
    const response = await fetch(config.GITHUB_API_BASE + `${username}/repos`);
    const repos = await response.json();
    return wrapServiceResult(repos, []);
}

async function fetchStaticData(username: String) {
    const response = await fetch(config.GITHUB_RAW_CONTENT_API_BASE + `${username}/static-app-data/master/portfolio.json`);
    const staticData = await response.json();
    return wrapServiceResult(staticData, []);
}

const networkService =  {
    fetchAllRepos,
    fetchStaticData
}

export default networkService;