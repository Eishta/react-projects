import React from 'react';

const Article = ({ article }) => {
    return (
        <article className='article'>
            {article.image ?
                <img src={article.image} alt={article.name} /> :
                <img src={`${process.env.PUBLIC_URL}/images/blank-person.png`} alt={article.name} />}
            <div className='article-info'>
                <h4>{article.name}</h4>
                <p>{article.age}</p>
            </div>
        </article>)
}

export default Article;