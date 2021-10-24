import testDataImport from '../../../lib/testData';
import projectService from '../projectService';
import addFetchToGlobal from '../../../lib/fetchMock';

const allProjects: any = testDataImport.allProjects || (testDataImport as any).defaults.allProjects;
const allowedProjectsSome: any = testDataImport.allowedProjectsSome || (testDataImport as any).defaults.allowedProjectsSome;
const filteredSome: any = testDataImport.filteredSome || (testDataImport as any).defaults.filteredSome;

addFetchToGlobal(jest);

beforeEach(() => {
  (global as any).fetch.mockClear();
});

describe('ProjectService', function() {
  describe('#getFilteredProjects', function() {
    test('should return all projects when no filtered list is configured', async function() {
      (global as any).fetch.mockReturnValueOnce(Promise.resolve({ json: () => allProjects })).mockReturnValueOnce(Promise.resolve({ json: () => ({ allowedProjects: allowedProjectsSome }) }));
      const {value: projects, errors} = await projectService.getFilteredProjects();
      expect(filteredSome.length).toEqual(projects.length);
    });
  });
});