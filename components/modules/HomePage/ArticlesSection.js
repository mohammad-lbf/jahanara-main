import React from 'react';
import ArticleCard from '../../mostamarComponents/modules/ArticleCard';
import articles from '../../../DB/articles/index';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

const ArticlesSection = () => {
  // مقالات رو بر اساس createdAt مرتب کن و فقط ۴ تا آخرش رو بردار
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 4);

  return (
    <section
      className="container shadow-sm border my-4 py-4 px-3 rounded"
      style={{
        // background: "linear-gradient(135deg,rgb(246, 231, 255) 0%,rgb(232, 246, 255) 100%)",
      }}
    >
      <h2
        className="lh-lg text-center mb-2 fs-4"
        style={{
          fontFamily: "KalamehWeb-Bold",
          color: "#090736",
        }}
      >
        مقالات آموزشی
      </h2>

      {/* Decorative Line */}
      <div
        className="lbf-after-card-img mb-4 mt-0 mx-auto"
        style={{ maxWidth: "300px" }}
      ></div>

      <p
        className="mt-2 lh-lg text-center text-muted mb-2"
        style={{
          fontFamily: "KalamehWeb-Medium",
          fontSize: "15px"
        }}
      >
        مقالات آموزشی و پژوهش‌های دبستان شهید جهان آرا
      </p>

      <h2
        className="pt-0 fw-bold text-center lh-lg fs-4 mb-3 d-flex justify-content-center align-items-center gap-2"
        style={{
          fontFamily: "KalamehWeb-Bold",
          color: "#03004e"
        }}
      >
        <FaChevronDown className="fs-5" />
        آخرین مقالات
        <FaChevronDown className="fs-5" />
      </h2>

      <div className="row justify-content-center row-cols-xxl-4 row-cols-lg-2 row-cols-sm-1 row-cols-md-2 row-cols-xs-1">
        {latestArticles.map((i) => (
          <div key={i.id} className="col-sm d-flex justify-content-center">
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
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <Link
          href="/articles"
          className="mt-3 btn-main-2 text-white d-flex align-items-center"
          style={{ width: "fit-content" }}
          aria-label="مشاهده همه مقالات دبستان شهید جهان آرا"
        >
          <span style={{ fontFamily: "KalamehWeb-Bold" }}>
            مشاهده ی همه مقالات
          </span>
          <i className="bi bi-chevron-double-left me-2 pt-2 animated-icon"></i>
        </Link>
      </div>
    </section>
  );
};

export default ArticlesSection;
