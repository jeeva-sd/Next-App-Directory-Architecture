import WebAPI from './webAPI';
export { service } from './AppServices';

const apiInstance1 = new WebAPI('https://jsonplaceholder.typicode.com');
export const http = apiInstance1.getInstance();