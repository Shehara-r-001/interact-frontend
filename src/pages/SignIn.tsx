import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='w-[50vw] md:w-[35vw] lg:w-[30vw] max-w-[300px] min-w-[260px] shadow-md hover:shadow-lg rounded-md'>
        <div className="bg-[url('https://media.istockphoto.com/photos/watercolor-painting-background-picture-id1179822347?b=1&k=20&m=1179822347&s=170667a&w=0&h=qmBmEZNgY1SQn_lDB6FSxWMO92E7phmDi1DYFia2HZs=')] h-[150px] rounded-t-md flex justify-center flex-col md:items-center">
          <h1 className='font-bold text-white uppercase text-lg ml-2'>
            Welcome back..!
          </h1>
          <p className='ml-2 md:ml-0 text-xs text-white md:text-center md:px-4'>
            let's just start where you left..
          </p>
        </div>
        <form className='px-2 py-4 flex justify-center flex-col'>
          <input type='text' placeholder='Email..' className='input_field' />
          <input type='text' placeholder='Password..' className='input_field' />
          <button className='sign_btn'>SIGNIN</button>
          <p className='text-xs mt-4 px-1'>
            Don't have an account? SignUp from{' '}
            <Link to='/signup'>
              <span className='text-blue-700 cursor-pointer'>here..</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
