import networkService from '../../lib/networkService'
import { withFailSafe, wrapServiceResult } from '../../lib/commonService';

/**
 * returns all projects to be displayed
 */
async function getFilteredProjects() {
    const {value: allRepos, errors: allReposError} = await withFailSafe(null, 'Could not fetch all repos')(networkService.fetchAllRepos)('KartikJha');
    if (allReposError.length) {
        return wrapServiceResult([], allReposError);
        // handle errors
    }
    const { value: staticData, errors: staticDataErrors } = await withFailSafe(null, 'Could not fetch staticData')(networkService.fetchStaticData)('KartikJha');
    if (staticDataErrors.length) {
        // handle errors
        return wrapServiceResult([], staticDataErrors);
    }
    // filter projects
    // const filteredProjects = [];
    return wrapServiceResult(allRepos.filter(v => staticData.allowedProjects[v.name]), []);
}

/**
 * returns all the languages for a langsUrl
 */
async function getProjectLangs(langsUrl) {
    const {value: langs, errors } = await withFailSafe(null, 'Could not fetch staticData')(networkService.fetchLangs)(langsUrl);
    if (errors.length) {
        return wrapServiceResult([], errors);
    }
    return wrapServiceResult(langs, []);
}



const projectService = {
    getFilteredProjects,
    getProjectLangs
}

export default projectService;