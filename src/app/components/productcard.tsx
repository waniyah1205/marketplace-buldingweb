import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { urlFor } from '@/sanity/lib/image';

type ProductCardProps = {
  _id: string;
  Productname: string;
  price: number;
  image: any;
  rating?: number;
};

export default function ProductCard({
  _id,
  Productname,
  price,
  image,
  rating = 4.5,
}: ProductCardProps) {
  return (
    <div className="bg-gray-200 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow">
      <div className="relative aspect-w-16 aspect-h-9">
        {image?.asset && (
          <Image
            src={urlFor(image).width(300).height(200).url()}
            alt={Productname}
            width={300}
            height={200}
            objectFit="cover"
            className="rounded-lg"
          />
        )}
      </div>
      <h3 className="mt-4 text-xl font-semibold">{Productname}</h3>
      <p className="text-lg font-bold text-gray-700">${price.toFixed(2)}</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500" />
        <span className="ml-1">{rating}</span>
      </div>
    </div>
  );
}
