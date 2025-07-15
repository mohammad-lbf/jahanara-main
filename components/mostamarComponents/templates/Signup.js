import { useState , useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Form } from 'react-bootstrap';

const Signup = ({setLocalSign}) => {
  const [userName, setUserName] = useState('');
  const [Err , setErr] = useState(false)
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserName = localStorage.getItem('userName');
      if (storedUserName) {
        // router.push(`/tests`); // جایگزین '/destination' با مسیر مقصد خود کنید
      }
    }
  }, []);
  const handleFormSubmit = (e) => {
    if(userName.length < 3){
      e.preventDefault();
      setErr(true)
    }
    else{
      e.preventDefault();
      setLocalSign(true)
      const initialData = {
        userName,
        userTests: {
          
        },
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem('userName', userName);
        localStorage.setItem('userData', JSON.stringify(initialData));
      }
      // router.push(`/tests/`); // جایگزین '/destination' با مسیر مقصد خود کنید
    }
  };

  return (
    <div className="container page-padding-tops">
      <div className='pt-4 mt-4 mb-2 row justify-content-center'>
            <div className='col-12 col-sm-10 col-md-7 col-lg-5 py-4 border my-4 rounded bg-light'>
            <h5 style={{fontSize:"24px",color:"#464749" , 
                fontFamily:"KalamehWeb-Bold"}} 
                className='text-center my-4'>
                ثبت نام
            </h5>
            <p 
              style={{fontSize:"15px" , 
              color:"#474d52" ,lineHeight:"2em" , 
              textAlign:"center" , 
              fontFamily:"KalamehWeb-Medium"}} 
              className=' pb-2 mb-2'>
                برای شرکت در دوره های سامانه، می‌بایست نام و نام خانوادگی خود را وارد کنید.</p>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className='text-center'
            placeholder='نام و نام خانوادگی'
          />
        </Form.Group>
        {
          Err &&
          <p 
              style={{fontSize:"15px" ,  
              textAlign:"justify" , 
              fontFamily:"KalamehWeb-Medium"}} 
              className='mt-3 text-danger text-center'>
               حداقل 3 کاراکتر وارد کنید
          </p>
        }
        <button className='border-0 px-3 mt-4 rounded btn-main-2 w-100' style={{fontFamily:"KalamehWeb-Medium"}}  type="submit">ثبت نام</button>
      </Form>
            </div>
      </div>
    </div>
  );
};

export default Signup;
