import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const Signup = ({ setLocalSign }) => {
  const [userName, setUserName] = useState('');
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedUserName = localStorage.getItem('userName');
      if (storedUserName) {
        setUserName(storedUserName);
        setLocalSign(true);
      }
    }
  }, [setLocalSign]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (userName.trim().length < 3) {
      setErr(true);
      return;
    }

    setErr(false);

    const initialData = {
      userName,
      userTests: {
        
      },
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem('userName', userName);
      localStorage.setItem('userData', JSON.stringify(initialData));
    }

    setLocalSign(true);
  };

  return (
    <div className="container">
      <div className='pt-2 mb-2 row justify-content-center'>
        <div className='col-12 pb-4 border my-2 rounded bg-light'>
          <h5
            style={{
              fontSize: "24px",
              color: "#464749",
              fontFamily: "KalamehWeb-Bold"
            }}
            className='text-center my-4'>
            ثبت نام
          </h5>
          <p
            style={{
              fontSize: "15px",
              color: "#474d52",
              lineHeight: "2em",
              textAlign: "center",
              fontFamily: "KalamehWeb-Medium"
            }}
            className='pb-2 mb-2'>
            برای شرکت در دوره‌های سامانه، می‌بایست نام و نام خانوادگی خود را وارد کنید.
          </p>

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

            {err &&
              <p
                style={{
                  fontSize: "15px",
                  textAlign: "justify",
                  fontFamily: "KalamehWeb-Medium"
                }}
                className='mt-3 text-danger text-center'>
                حداقل ۳ کاراکتر وارد کنید.
              </p>
            }

            <button
              className='border-0 px-3 mt-4 rounded btn-main-2 w-100'
              style={{ fontFamily: "KalamehWeb-Medium" }}
              type="submit">
              ثبت نام
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
