import axios from 'axios';

export default async (count) => {
    const res = await axios(`https://api.unsplash.com/photos/random?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}&count=${count}`);
    return res.data;
}