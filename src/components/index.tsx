'use client';

import React from 'react';
import { useSelector } from 'react-redux';
import { fetchPost } from '~/state/duck/posts';
import { AppState, dispatch } from '~/state/store';

const Index = () => {
    const { post, loading } = useSelector((state: AppState) => state.posts);

    return (
        <div className='w-full text-center'>
            {loading ?
                <div>loading...</div>
                :
                <button
                    className='border border-black p-2 rounded bg-white text-black hover:bg-slate-50'
                    onClick={() => dispatch(fetchPost())}>
                    Fetch posts
                </button>}

            {post?.map((post: any, index: number) => <div key={index}>{post.title}</div>)}
        </div>
    )
}

export default Index;