import axios from 'axios';

export default async () => {
    return await axios('https://jsonplaceholder.typicode.com/posts');
}