import addFetchToGlobal from '../fetchMock';
import networkService from '../networkService';
import testDataImport from '../testData';

const allProjects: any = testDataImport.allProjects || (testDataImport as any).defaults.allProjects;
const allowedProjectsSome: any = testDataImport.allowedProjectsSome || (testDataImport as any).defaults.allowedProjectsSome;

addFetchToGlobal(jest);

beforeEach(() => {
    (global as any).fetch.mockClear();
});
  

describe('NetworkService', () => {
    describe('#fetchAllRepos', () => {
        test('it should fetch all projects', async () => {
            (global as any).fetch.mockReturnValueOnce(Promise.resolve({ json: () => allProjects }));
            const allProjectsResponse = await networkService.fetchAllRepos('KartikJha');
            expect(allProjectsResponse).toStrictEqual({ errors: [], value: allProjects});
        });
    })

    describe('#fetchStaticData', () => {
        test('it should fetch list of all allowed repos', async () => {
            (global as any).fetch.mockImplementationOnce(() => Promise.resolve({ json: () => allowedProjectsSome }));
            const allowedProjectsResponse = await networkService.fetchStaticData('KartikJha');
            expect(allowedProjectsResponse).toStrictEqual({ errors: [], value: allowedProjectsSome})
        })
    })
})