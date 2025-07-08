import { useState, useEffect } from "react";

export default function FileForm() {
  const generateRandomId = () => Math.floor(10000 + Math.random() * 90000);

  const [formData, setFormData] = useState({
    id: generateRandomId(),
    name: "",
    caption: "",
    creator: "",
    upoledDate: "",
    fileType: "PDF",
    src: "",
    book: "",
    boolInP: "",
    gradeInP: "",
    category: "soalat",
    image: "",
    slug: ""
  });
  const [generatedJson, setGeneratedJson] = useState(null);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, id: generateRandomId() }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      
      if (name === "name" || name === "gradeInP" || name === "category") {
        updatedData.caption = `${updatedData.name} - ${updatedData.gradeInP}`;
      }
      
      if (updatedData.gradeInP && updatedData.id && updatedData.category) {
        const gradeSlugMap = {
          "پایه سوم": "sevom",
          "پایه چهارم": "chaharom",
          "پایه پنجم": "panjom",
          "پایه ششم": "sheshom"
        };
        const gradeSlug = gradeSlugMap[updatedData.gradeInP] || "";
        updatedData.slug = `/${gradeSlug}/${updatedData.category}/${updatedData.id}`;
      }
      
      return updatedData;
    });
  };

  const handleRefreshId = () => {
    const newId = generateRandomId();
    setFormData((prev) => {
      const updatedData = { ...prev, id: newId };
      if (updatedData.gradeInP && updatedData.category) {
        const gradeSlugMap = {
          "پایه سوم": "sevom",
          "پایه چهارم": "chaharom",
          "پایه پنجم": "panjom",
          "پایه ششم": "sheshom"
        };
        const gradeSlug = gradeSlugMap[updatedData.gradeInP] || "";
        updatedData.slug = `/${gradeSlug}/${updatedData.category}/${newId}`;
      }
      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGeneratedJson(JSON.stringify(formData, null, 2));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedJson);
  };

  const creators = ["محمد لبافی", "سید حسین قریشیان", "یونس علمداری", "خانم فاطمه امراللهی", "خانم زینب شاه علی", "خانم حدیث مرادی پور", "خانم ندا باقریان", "خانم مریم سلطانی", "سپهر ابراهیم پور", "شایان حاجتی", "امیر عدلی یکتا", "سلمان نوری", "سید امین نیک فکر"];
  const fileTypes = ["PDF", "WORD", "PPTX", "video", "JPG"];
  const books = ["hedye", "quran", "farsi", "riazi", "motaleat", "oloom"];
  const bookInP = ["هدیه های آسمان", "فارسی", "ریاضی", "قرآن", "مطالعات اجتماعی", "علوم تجربی"];
  const grades = ["پایه سوم", "پایه چهارم", "پایه پنجم", "پایه ششم"];
  const categories = ["soalat", "tarhedars", "darsnameh", "mohtava"];

  const images = [
    "/images/components/modules/books/chaharom/riazi.jpg",
    "/images/components/modules/books/chaharom/farsi.jpg",
    "/images/components/modules/books/chaharom/motaleat.jpg",
    "/images/components/modules/books/chaharom/hedye.jpg",
    "/images/components/modules/books/chaharom/oloom.jpg",
    "---",
    "/images/components/modules/books/sevom/oloom.jpg",
    "/images/components/modules/books/sevom/riazi.jpg",
    "/images/components/modules/books/sevom/farsi.jpg",
    "/images/components/modules/books/sevom/motaleat.jpg",
    "---",
    "/images/components/modules/books/panjom/oloom.jpg",
    "/images/components/modules/books/panjom/motaleat.jpg",
    "---",
    "/images/components/modules/books/sheshom/riazi.jpg",
    "/images/components/modules/books/sheshom/farsi.jpg",
    "/images/components/modules/books/sheshom/motaleat.jpg",
    "/images/components/modules/books/sheshom/hedye.jpg",
    "/images/components/modules/books/sheshom/oloom.jpg",
  ];

  return (
    <div style={{paddingTop:"100px"}} className="container mt-4">
      <div className="card pt-4 shadow-sm mx-auto" style={{ maxWidth: "500px" }}>
        <div className="card-body pt-4">
          <h2 className="card-title text-center mb-4">      تولیدکننده کد JSON</h2>
          <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => (
              <div key={key} className="mb-2">
                <label className="form-label fw-bold">{key}:</label>
                {key === "id" ? (
                  <div className="d-flex">
                    <input
                      type="text"
                      name={key}
                      value={formData[key]}
                      className="form-control form-control-sm"
                      disabled
                    />
                    <button type="button" onClick={handleRefreshId} className="btn btn-sm btn-secondary ms-2">
                      🔄
                    </button>
                  </div>
                ) : ["creator", "fileType", "book", "boolInP", "gradeInP", "category", "image"].includes(key) ? (
                  <select
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="form-select form-select-sm"
                  >
                    <option value="">انتخاب کنید</option>
                    {(key === "creator"
                      ? creators
                      : key === "fileType"
                      ? fileTypes
                      : key === "book"
                      ? books
                      : key === "boolInP"
                      ? bookInP
                      : key === "gradeInP"
                      ? grades
                      : key === "category"
                      ? categories
                      : key === "image"
                      ? images
                      : []
                    ).map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="form-control form-control-sm"
                  />
                )}
              </div>
            ))}
            <button type="submit" className="btn btn-primary w-100 mt-2">
              تولید JSON
            </button>
          </form>
          {generatedJson && (
            <div className="mt-3 p-3 border rounded bg-light">
              <pre className="text-break small">{generatedJson}</pre>
              <button onClick={handleCopy} className="btn btn-success mt-2 w-100">
                کپی JSON
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
