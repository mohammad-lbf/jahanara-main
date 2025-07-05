import Image from 'next/image';
import React from 'react';
import ArticleBreadcrumb from '../../elements/ArticleBreadcrumb';
import DateConverter from '../../elements/DateConverter';
import ArticleAuthor from './ArticleAuthor';
import ArticleContent from './ArticleContent';
import ArticleDuration from './ArticleDuration';
import ArticleImage from './ArticleImage';

const ArticleSection = ({article}) => {
    const {mainTitle , coverPhoto , slug , content , duration , createdAt} = article
    return (
        <div className='pt-4 bg-white px-3 pb-2 mb-3'>
            <ArticleBreadcrumb slug={slug} title={mainTitle} />
            <h3 style={{fontFamily:"KalamehWeb-Bold"}} className='article-section__title mb-3'>{mainTitle}</h3>
            <ArticleDuration duration={duration} />
            <div className='d-flex justify-content-between align-items-center'>
                <ArticleAuthor />
                <DateConverter initialDate={createdAt} />
            </div>
                <div className='d-flex justify-content-center mb-3'><ArticleImage slug={slug} coverPhoto={coverPhoto} /></div>
                <ArticleContent content={content} slug={slug} />
        </div>
    );
};

export default ArticleSection;