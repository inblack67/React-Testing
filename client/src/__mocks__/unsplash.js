import axios from 'axios';

const fakeData = [
    {
        id: 1,
        urls: {
            raw: 'http://test-cors.org/'
        }
    }
];


export default async (count) => await new Promise.resolve(res => res(fakeData));