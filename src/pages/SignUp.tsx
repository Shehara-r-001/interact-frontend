import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

export const SignUp = () => {
  const captchaRef = useRef<any>(null);

  const signUpFunction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = await captchaRef.current.getValue();

    if (token) {
      console.log(token);

      // https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CLIENT_SECRET_KEY}&response=${token}
    }

    captchaRef.current.reset();
  };
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='w-[50vw] md:w-[35vw] lg:w-[30vw] max-w-[320px] min-w-[320px] shadow-md hover:shadow-lg rounded-md'>
        <div className="bg-[url('https://media.istockphoto.com/photos/watercolor-painting-background-picture-id1179822347?b=1&k=20&m=1179822347&s=170667a&w=0&h=qmBmEZNgY1SQn_lDB6FSxWMO92E7phmDi1DYFia2HZs=')] h-[150px] rounded-t-md flex justify-center md:items-center flex-col">
          <h1 className='font-bold text-white uppercase text-lg ml-2'>
            Welcome..!
          </h1>
          <p className='ml-2 text-xs text-white md:text-center md:px-4'>
            First step to anything is just start. Everything else will follow..
          </p>
        </div>
        <form
          onSubmit={signUpFunction}
          className='px-2 py-4 flex justify-center flex-col'
        >
          <input type='text' placeholder='Email..' className='input_field' />
          <input type='text' placeholder='Password..' className='input_field' />
          <input
            type='text'
            placeholder='Confirm the Password..'
            className='input_field mb-2'
          />
          <ReCAPTCHA
            sitekey='6LdRGEgiAAAAAD8gjc0gGmd5fDNtvivzIzWpGHrb'
            size='normal'
            ref={captchaRef}
          />
          <button className='sign_btn'>SIGNUP</button>
          <p className='text-xs mt-4 px-1'>
            Already have an account? SignIn from{' '}
            <Link to='/signin'>
              <span className='text-blue-700 cursor-pointer'>here..</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
