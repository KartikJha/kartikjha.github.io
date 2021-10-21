function addFetchToGlobal(jest: any) {
    (global as any).fetch = jest.fn(() =>
        Promise.resolve({
        json: () => Promise.resolve(true),
        })
    );
    return (global as any).fetch;
}

export default addFetchToGlobal;
