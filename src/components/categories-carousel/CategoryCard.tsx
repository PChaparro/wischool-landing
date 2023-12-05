type Category = {
  name: string;
  thumbnail: string;
  description: string;
};

type Props = {
  category: Category;
};

export const CategoryCard = ({ category }: Props) => {
  return (
    <article className="group relative h-full w-full">
      <img
        src={category.thumbnail}
        alt={`${category.name} thumbnail`}
        className="absolute aspect-[3/4] h-full w-full object-cover object-center brightness-[40%]"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-center gap-2 p-4 text-white md:items-start md:justify-end">
        <h3 className="text-lg font-semibold md:text-3xl">{category.name}</h3>
        <p className="hidden max-h-0 overflow-hidden text-lg transition-all duration-500 ease-in-out group-hover:max-h-64 md:block">
          {category.description}
        </p>
      </div>
    </article>
  );
};
