import React from 'react';

import ContentItem from './ContentItem';
import ShareSecton from './ShareSecton';

const ArticleContent = ({content , slug}) => {
    return (
        <div className=''>
            {
                content.map(item=> <ContentItem key={item.id} {...item} slug={slug} />)
            }
            <ShareSecton slug={slug} />
            {/* <CommentsSection comments={comments} slug={slug} commentApi={"/api/articles/comment"} answeringApi={"/api/articles/answer"}  /> */}
        </div>
    );
};

export default ArticleContent;