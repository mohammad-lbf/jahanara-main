import React from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const UsefulLinks = () => {
  const links = [
    {
      title: "سامانه املاک و اسکان",
      url: "https://amlak.mrud.ir",
      icon: "bi-house-door-fill",
      color: "#FF5722",
    },
    {
      title: "سامانه جامع آموزش و پرورش",
      url: "https://my.medu.ir",
      icon: "bi-mortarboard-fill",
      color: "#3F51B5",
    },
    {
      title: "سامانه ثبت نام کتاب درسی",
      url: "https://irtextbook.ir",
      icon: "bi-book-fill",
      color: "#E91E63",
    },
    {
      title: "سازمان سنجش آموزش کشور",
      url: "https://sanjesh.org",
      icon: "bi-bar-chart-fill",
      color: "#009688",
    },
  ];

  return (
    <div className="container my-2 py-2">
      <h2
        className="pt-0 my-4 fw-bold text-center lh-lg fs-4 d-flex justify-content-center align-items-center gap-2"
        style={{
          fontSize: "30px",
          fontFamily: "KalamehWeb-Bold",
          color: "#03004e",
        }}
      >
        <FaChevronDown className="fs-5" />
        سامانه های مورد نیاز شما
        <FaChevronDown className="fs-5" />
      </h2>
      <div className="row justify-content-center">
        {links.map((link, index) => (
          <div key={index} className="col-6 col-md-3 mb-4">
            <Link
              href={link.url}
              target="_blank"
              className="text-decoration-none"
            >
              <div
                className="card text-center h-100 shadow border-0"
                style={{
                  borderRadius: "1rem",
                  background: `linear-gradient(135deg, ${link.color}33, #ffffff)`,
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="mb-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      backgroundColor: link.color,
                      position:"relative",
                      color: "#fff",
                      fontSize: "24px",
                    }}
                  >
                    <i
                    style={{position:"absolute" , top:"13px" , left:"13px"}}
                    className={link.icon}></i>
                  </div>
                  <h6
                    className="mb-1 text-dark"
                    style={{
                      fontWeight: "bold",
                      fontSize: "0.95rem",
                      lineHeight:"30px",
                      fontFamily: "KalamehWeb-Bold",
                    }}
                  >
                    {link.title}
                  </h6>
                  <small
                    className="text-muted"
                    style={{
                      fontSize: "0.75rem",
                      direction: "ltr",
                      wordBreak: "break-all",
                    }}
                  >
                    {link.url}
                  </small>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <style jsx>{`
        .card:hover {
          transform: translateY(-5px) scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default UsefulLinks;
