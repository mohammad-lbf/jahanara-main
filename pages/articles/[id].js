import Head from "next/head";
import React from "react";
import ArticlePage from "../../components/templates/ArticlePage";
import articles from "../../DB/articles/index";
import DefaultLayout from "@/components/layout/DefaultLayout";

const Article = ({ article }) => {
  if (!article) return <p>مقاله پیدا نشد.</p>;

  // داینامیک کردن title و description
  const pageTitle = `${article.mainTitle} - نویسنده: ${article.ArticleAuthor} | مقالات آموزشی دبستان شهید جهان‌آرا`;

  const description = article.caption
    ? `${article.caption} نویسنده: ${article.ArticleAuthor}`
    : `مقاله‌ای از ${article.ArticleAuthor} در دبستان شهید جهان‌آرا.`;

  const canonicalUrl = `https://jahanaraschool.ir/articles/${article.id}`;
  const ogImage = article.coverPhoto;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>

        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={article.ArticleAuthor} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان‌آرا" />
        {ogImage && (
          <meta property="og:image" content={ogImage} />
        )}

        {/* Twitter */}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        {ogImage && (
          <meta name="twitter:image" content={ogImage} />
        )}

        {/* Optional Keywords */}
        {article.keywords && (
          <meta name="keywords" content={`${article.mainTitle}, ${article.ArticleAuthor}`} />
        )}
      </Head>
      <DefaultLayout>
        <ArticlePage articles={articles} article={article} />
      </DefaultLayout>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = articles.map((item) => ({
    params: { id: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const currentArticle = articles.find(
    (item) => item.id === params.id
  );

  return {
    props: {
      article: currentArticle || null,
    },
  };
}

export default Article;
