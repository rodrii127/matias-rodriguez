import React from 'react'
import { BlogEntry } from './BlogEntry';

export const BlogEntries = () => {


    const entries = [1, 2, 3 ,4 ,5 ,6 ,7 ,8 , 9, 10];

    return (
        <div className='journal__entries'>
            
            {
                entries.map( value => (
                    <BlogEntry key={value} />
                ) )
            }

        </div>
    )
}
