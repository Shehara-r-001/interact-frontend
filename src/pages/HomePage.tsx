import Filter from '../components/Homepage/Filter';
import { useFetchProducts } from '../hooks/useFetchProducts';

const HomePage = () => {
  const getProducts = useFetchProducts();

  const { data, isLoading, isError } = getProducts;
  if (data) console.log(data);
  if (isError) console.error('errooooooooorrr');

  return (
    <div className='pt-[70px] h-screen w-full bg-[#f2f2f2]'>
      <Filter />
    </div>
  );
};

export default HomePage;
