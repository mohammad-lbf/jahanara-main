import Head from "next/head";
import React from "react";
import ArticlePage from "../../components/templates/ArticlePage";
import { useRouter } from "next/router";
import articles from "../../DB/articles/index";

const Article = () => {
  const router = useRouter();
  const currentArticle = articles.find(
    (item) => item.id === router.query.id
  );

  if (!router.query.id || !currentArticle)
    return <p>در حال بارگذاری...</p>;

  const canonicalUrl = `https://jahanaraschool.ir/articles/${currentArticle.id}`;
  const pageTitle = `${currentArticle.mainTitle} | مقالات آموزشی دبستان شهید جهان‌آرا`;
  const description =
    currentArticle.caption ||
    "مقاله آموزشی از دبستان شهید جهان‌آرا.";
  const ogImage = currentArticle.coverPhoto;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>

        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="محمد لبافی" />
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        {ogImage && (
          <meta name="twitter:image" content={ogImage} />
        )}

        {/* Optional Keywords */}
        {currentArticle.keywords && (
          <meta name="keywords" content={currentArticle.mainTitle} />
        )}
      </Head>

      <ArticlePage articles={articles} article={currentArticle} />
    </div>
  );
};

export default Article;
