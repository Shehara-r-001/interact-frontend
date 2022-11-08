type Props = {
  data: ICategory[];
};

const Categories = ({ data }: Props) => {
  return (
    <div className={` bg-white  w-[140px] p-1 px-2 text-sm`}>
      <ul className='space-y-1'>
        {data.map((cat) => (
          <li key={cat.id} className='ddItem dropdown_effect border-pink-500'>
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
