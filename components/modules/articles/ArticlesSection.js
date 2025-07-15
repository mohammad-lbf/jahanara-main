import React from 'react';
import ArticleCard from '../../mostamarComponents/modules/ArticleCard';


const ArticlesSection = ({articles}) => {
    return (
        <>
            {/* <h3 className="color-linear text-center text-lg-end">آزمون ها</h3> */}
            <div className="container px-0">
            <h3 style={{fontFamily:"KalamehWeb-Bold" , color:"#090736" , fontSize:"27px"}} className='lh-lg text-center mb-2'>مقالات آموزشی</h3>
            <div style={{maxWidth:"300px"}} className="lbf-after-card-img mb-4 mt-0 mx-auto"></div>
                <div className="row justify-content-center row-cols-xxl-4 row-cols-lg-2 row-cols-sm-1 row-cols-md-2 row-cols-xs-1">
                    {
                        articles.map(i=> <div key={i.id} className='col-sm d-flex justify-content-center'>
                            <ArticleCard
              slug={i.slug}
              coverPhoto={i.coverPhoto}
              title={i.mainTitle}
              caption={i.caption}
              buttonText="مشاهده ی مقاله"
              finishStatus={true}
              ArticleAuthor={i.ArticleAuthor}
              ArticleAuthorProfileImage={i.ArticleAuthorProfileImage}
            />
                            </div> )
                    }

                    

          
                </div>
            </div>
        </>
    );
};

export default ArticlesSection;