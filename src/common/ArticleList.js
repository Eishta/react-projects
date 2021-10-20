import React from 'react';
import Article from './Article';

const ArticleList = ({ listData }) => {
    return (
        <div className='article-list'>
            {listData.map((ele, i) => <Article article={ele} key={i}/>)}
        </div>
    )
}
export default ArticleList;