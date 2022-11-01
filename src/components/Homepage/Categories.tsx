const Categories = () => {
  return (
    <div className={` bg-white  w-[140px] p-1 px-2 text-sm`}>
      <ul className='space-y-1'>
        <li className='ddItem dropdown_effect border-pink-500'>Cakes</li>
        <li className='ddItem dropdown_effect border-pink-500'>Crafts</li>
        <li className='ddItem dropdown_effect border-pink-500'>Decorations</li>
        <li className='ddItem dropdown_effect border-pink-500'>Clothing</li>
      </ul>
    </div>
  );
};

export default Categories;
