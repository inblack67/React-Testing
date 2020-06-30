import React, { useState, useEffect, Fragment } from 'react'
import fetchPosts from '../ajaxCalls/fetchPosts'

const UseEffectCycle = () => {

    useEffect(() => {
        let mounted = true;

        const getPosts = async () => {
            const res = await fetchPosts();
            if(mounted){
                setPosts(res.data);
                setLoading(false);
            }
        }

        getPosts();

        return () => {
            mounted = false;
        }
    }, [])

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    // const getPosts = async () => {
    //     const res = await fetchPosts();
    //     setPosts(res.data);
    //     setLoading(false);
    // }

    return (
        <div>
            { loading && <h4 data-testid="loading">Loading...</h4> }
            { posts && posts.map(post => <span key={post.id}>
                { post.title }
            </span>) }
            <span data-testid='resolved'>Resolved</span>
        </div>
    )
}

export default UseEffectCycle
