import Head from "next/head";
import DeveloperPage from "@/components/modules/Hamyar modules/components/templates/DeveloperPage";
import HamyarLayout from "@/components/layout/HamyarLayout";
import MostamarLayout from "@/components/layout/MostamarLayout";
import Link from "next/link";

export default function Home() {
  const canonicalUrl = "https://jahanaraschool.ir/mostamar/developer";

  return (
    <>
      <Head>
        <title>درباره سامانه یادگیری مستمر دبستان شهید جهان‌آرا | jahanaraschool.ir</title>
        <meta
          name="description"
          content="درباره سامانه یادگیری مستمر دبستان شهید جهان آرا شامل توضیحات کامل معماری پروژه، تکنولوژی‌های استفاده شده، نحوه راه‌اندازی، احراز هویت و لینک‌های مفید برای توسعه‌دهندگان بعدی است."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="محمد لبافی" />
        <meta
          name="keywords"
          content="درباره سامانه یادگیری مستمر, Next.js, React, MERN Stack, توسعه وب, دبستان شهید جهان آرا"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fa_IR" />
        <meta
          property="og:title"
          content="درباره سامانه یادگیری مستمر دبستان شهید جهان‌آرا | jahanaraschool.ir"
        />
        <meta
          property="og:description"
          content="درباره سامانه یادگیری مستمر دبستان شهید جهان آرا شامل توضیحات کامل معماری پروژه، تکنولوژی‌های استفاده شده، نحوه راه‌اندازی، احراز هویت و لینک‌های مفید برای توسعه‌دهندگان بعدی است."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="دبستان شهید جهان آرا" />
        <meta
          property="og:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />

        {/* Twitter Card */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta
          name="twitter:title"
          content="درباره سامانه یادگیری مستمر دبستان شهید جهان‌آرا | jahanaraschool.ir"
        />
        <meta
          name="twitter:description"
          content="درباره سامانه یادگیری مستمر دبستان شهید جهان آرا شامل توضیحات کامل معماری پروژه، تکنولوژی‌های استفاده شده، نحوه راه‌اندازی، احراز هویت و لینک‌های مفید برای توسعه‌دهندگان بعدی است."
        />
        <meta
          name="twitter:image"
          content="https://jahanaraschool.ir/images/og-image.jpg"
        />
      </Head>
      <MostamarLayout>
      <main style={{ minHeight: "100vh" }}>
      <>

<div style={{paddingTop:"120px"}} className="container mb-3">
  <div className="card shadow-lg px-2 py-4">
    <h2 style={{fontSize:"25px", fontFamily:"KalamehWeb-Bold"}} className="text-primary text-center mb-3 lh-lg">🔧درباره سامانه یادگیری مستمر دبستان شهید جهان آرا</h2>
    <p style={{fontSize:"14px" , color:"black" , fontFamily:"KalamehWeb-Bold"}} className="border-bottom pb-4 text-center">
      و اطلاعاتی برای توسعه‌دهندگان بعدی این سامانه
    </p>
    <p className="p-3 pb-0" style={{fontSize:"14px", fontFamily:"KalamehWeb-Medium" , lineHeight:"1.9"}}>

    سامانه یادگیری مستمر دبستان شهید جهان‌آرا بستری آموزشی ویژه معلمان این مدرسه است که با هدف توسعه حرفه‌ای و ارتقای مهارت‌های آموزشی طراحی شده است. این سامانه دوره‌های آموزشی ضمن خدمت را به‌صورت ساختاریافته و کاربردی ارائه می‌دهد تا معلمان بتوانند به دانش و روش‌های نوین تدریس دسترسی داشته باشند و سطح کیفی آموزش را بهبود بخشند.
    </p>
    <p className="p-3 pb-0" style={{fontSize:"14px", fontFamily:"KalamehWeb-Medium" , lineHeight:"1.9"}}>
     این پروژه با استفاده از Next.js 14 توسعه داده شده و به عنوان یک وب اپلیکیشن سمت سرور (SSG) و مبتنی بر React طراحی شده است. معماری این سامانه از Page Routing برای مسیرهای مختلف بهره می‌برد و احراز هویت کاربران از طریق کوکی‌ها (js-cookie) مدیریت می‌شود. 

<br />
<br />
در این مستندات، اطلاعات مورد نیاز برای توسعه‌دهندگان بعدی از جمله ساختار پروژه، نحوه راه‌اندازی، مسیرهای صفحه، مدیریت وضعیت و وابستگی‌های کلیدی آورده شده است. لطفاً قبل از اعمال تغییرات، به نسخه‌های کتابخانه‌ها و ساختار کلی پروژه دقت کنید تا از ناسازگاری‌های احتمالی جلوگیری شود. 🚀
    </p>
    <p style={{fontSize:"13px",color:"#000" , lineHeight:"1.9" , 
            fontFamily:"KalamehWeb-Medium"}} 
            className='px-2 text-start mb-1'>
          با تشکر
        </p>
        <p style={{fontSize:"13px",color:"#000" , lineHeight:"1.9" , 
            fontFamily:"KalamehWeb-Medium"}} 
            className='px-2 text-start mb-1'>
          محمد لبافی، توسعه‌دهنده سامانه های دبستان شهید جهان آرا
        </p>
        <p style={{fontSize:"13px",color:"#000" , lineHeight:"1.9" , 
            fontFamily:"KalamehWeb-Medium"}} 
            className='px-2 text-start mb-1 border-bottom'>
              زمستان 1403
        </p>
    

    <h2 style={{ fontSize: "23px", fontFamily: "KalamehWeb-Bold" }} className="mt-4 mb-3 text-center">🔹اطلاعات کلی🔹</h2>
<table className="table border rounded table-bordered table-striped text-center">
<thead className="table-primary">
<tr>
<th className="fw-bold">ویژگی</th>
<th className="fw-bold">مقدار</th>
</tr>
</thead>
<tbody>
<tr>
<td className="fw-bold">📂 پلتفرم</td>
<td>Web Application</td>
</tr>
<tr>
<td className="fw-bold">🚀 فریمورک</td>
<td>Next.js <span className="badge bg-success">14.2.3</span></td>
</tr>
<tr>
<td className="fw-bold">📝 زبان برنامه‌نویسی</td>
<td>JavaScript (React-based)</td>
</tr>
<tr>
<td className="fw-bold">📦 نسخه React</td>
<td>React <span className="badge bg-info">18</span></td>
</tr>
<tr>
<td className="fw-bold">📡 احراز هویت</td>
<td>کوکی (<code>js-cookie@3.0.5</code>)</td>
</tr>
<tr>
<td className="fw-bold">🎨 UI Library</td>
<td>Bootstrap <span className="badge bg-primary">5.3.3</span> + React-Bootstrap <span className="badge bg-primary">2.10.5</span></td>
</tr>
</tbody>
</table>

<style>
{`
.custom-pre {
background-color: black;
color: #00ff00;
padding: 10px;
border-radius: 5px;

}
`}
</style>

<h2 style={{ fontSize: "23px", fontFamily: "KalamehWeb-Bold" }} className="mb-3 mt-2 text-center">🚀 لینک‌های مهم</h2>
<div className="d-flex flex-column align-items-center pb-4 border-bottom">
{/* <button style={{width:"250px"}} className="btn btn-danger mt-3 mb-2">
🔗 <Link className="text-white" style={{fontSize: "12px", fontFamily: "KalamehWeb-Bold" }} href="/hamyar/developer/itemCreator">
تولیدکننده کد JSON
</Link>
</button> */}
<button style={{width:"250px"}} className="btn-main-2 mt-3">
📑 <a className="text-white" style={{fontSize: "12px", fontFamily: "KalamehWeb-Bold" }} href="https://github.com/mohammad-lbf" target="_blank">
مشاهده صفحه GitHub توسعه دهنده
</a>
</button>
</div>




    <h2 style={{ fontSize: "23px", fontFamily: "KalamehWeb-Bold" }} className="my-4 text-center">📌 نحوه راه‌اندازی پروژه</h2>
    <pre
     className="custom-pre p-3 rounded">
      {`git clone https://github.com/...
cd project-folder
npm install
npm run dev`}
    </pre>
    <h2 style={{ fontSize: "23px", fontFamily: "KalamehWeb-Bold" }} className="my-4 text-center">🌐 صفحات اصلی سایت</h2>
<table className="table table-bordered text-center table-striped">
<thead className="table-primary">
<tr>
<th>🔹 عنوان</th>
<th>🔗 لینک</th>
</tr>
</thead>
<tbody>
<tr>
<td>🏠 صفحه اصلی</td>
<td><Link href="/hamyar/">/</Link></td>
</tr>
<tr>
<td>📚 پایه‌ها</td>
<td><Link dir="ltr" href="/hamyar/bases">/bases</Link></td>
</tr>
<tr>
<td>📖 کتاب‌های درسی</td>
<td><Link dir="ltr" href="/hamyar/books">/books</Link></td>
</tr>
<tr>
<td>👨‍💻 درباره توسعه‌دهنده</td>
<td><Link dir="ltr" href="/hamyar/about-developer">/about-developer</Link></td>
</tr>

<tr>
<td>🔧درباره سامانه</td>
<td><Link dir="ltr" href="/hamyar/developer">/developer</Link></td>
</tr>
</tbody>
</table>


    <h2  style={{ fontSize: "23px", fontFamily: "KalamehWeb-Bold" }} className="text-center my-4">🔑 احراز هویت و کوکی‌ها</h2>
    <p style={{ fontSize: "14px", fontFamily: "KalamehWeb-Bold" }} className="text-center mb-3">سامانه از کوکی‌ها برای احراز هویت استفاده می‌کند:</p>
    <pre style={{backgroundColor: "black",
color: "#00ff00",
padding: "10px",
borderRadius: "5px"}} className="p-3 rounded" >
      {`import Cookies from 'js-cookie';
      *
      *
      *
      * 
const [password, setPassword] = useState('');
const [Err , setErr] = useState(false)
const router = useRouter();

useEffect(() => {
const isAuthenticated = Cookies.get('auth');
if (isAuthenticated === 'true') {
  router.push('/'); // هدایت به صفحه لاگین در صورت عدم احراز هویت
}
}, []);
const handleLogin = (e) => {
e.preventDefault();
  const correctPassword = "****"; // رمز عبور مورد نظر خود
  if (password === correctPassword) {
    setErr(false);
    // تنظیم کوکی با انقضای یک روز
    Cookies.set('auth', 'true', { expires: 1 });
    router.push('/'); // به صفحه محافظت‌شده هدایت می‌شود
  } else {
    setErr('true');
  }
};`}
    </pre>
    <h2  style={{ fontSize: "23px", fontFamily: "KalamehWeb-Bold" }} className="text-center my-4">📁محتوای فایل package.json:</h2>
    <pre
     className="custom-pre p-3 rounded">
      {`
{
"name": "hamyar-jahanara",
"version": "0.1.0",
"private": true,
"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint"
},
"dependencies": {
"@react-pdf-viewer/core": "^3.12.0",
"@react-pdf-viewer/default-layout": "^3.12.0",
"bootstrap": "^5.3.3",
"framer-motion": "^11.11.7",
"js-cookie": "^3.0.5",
"mammoth": "^1.8.0",
"next": "14.2.3",
"pdfjs-dist": "^3.11.174",
"react": "^18",
"react-bootstrap": "^2.10.5",
"react-dom": "^18",
"react-pdf": "^9.1.1"
},
"devDependencies": {
"eslint": "^8",
"eslint-config-next": "14.2.3"
}
}
`}
    </pre>
    <div className="text-center mt-4">
      <Link href="/hamyar" className="btn btn-primary">بازگشت به صفحه اصلی</Link>
    </div>
  </div>
</div>
</>
      </main>
      </MostamarLayout>
    </>
  );
}
