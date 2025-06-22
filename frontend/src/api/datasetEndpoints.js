export const allDataEndpoint = '/api/personality/get';
export const getDataEndpoint = (id) => `/api/personality/get/${id}`;
export const createDataEndpoint = '/api/personality/add-record';
export const updateDataEndpoint = (id) => `/api/personality/modify-record/${id}`;
export const deleteDataEndpoint = (id) => `/api/personality/delete-record/${id}`;
export const importCSVEndpoint = '/api/personality/import-csv';