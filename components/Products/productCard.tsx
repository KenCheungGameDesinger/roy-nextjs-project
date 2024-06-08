import { Archive, Heart, Star } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { toast, useToast } from "../ui/use-toast";

type Props = {
  product: any;
  index: number;
};

const ProductCard = ({ product, index }: Props) => {
  const { toast } = useToast();
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
    console.log(like);
  };

  return (
    <div className="mb-4 bg-white h-fit w-[300px]  rounded-md py-2 px-4">
      <img
        className="h-[180px] mx-auto rounded-lg object-cover"
        src={product.thumbnail}
        alt="thumbnail"
      />
      <div className="flex space-x-2 items-center mt-2">
        <div className="flex space-x-1 items-center ">
          <Archive className="w-3 h-3" />
          <p className="text-xs align-bottom">{product.stock}</p>
        </div>
        <div className="flex space-x-1 items-center ">
          <Star className="w-3 h-3 text-yellow-500  " fill="#eab308" />
          <p className="text-xs">{product.rating}</p>
        </div>
      </div>
      <h1 className="text-xl font-bold">{product.title}</h1>
      <p className="text-sm text-gray-700  line-clamp-3">
        {product.description}
      </p>
      <div className="flex flex-row justify-between mt-3">
        {/* Left */}
        <div className="flex flex-row items-end">
          <p className="text-lg text-red-600">{product.price}</p>
          <p className="text-sm text-gray-500 line-through">
            {product.discountPercentage}
          </p>
        </div>

        {/* Right */}
        <div className="flex space-x-2 items-center">
          <Heart strokeWidth={1.5} fill={like ? "red" : "none"} onClick={() => handleLike()} />
          <Button
            onClick={() =>
              toast({ title: "Product Added", description: product.title })
            }
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <p className="text-xs text-gray-700  line-clamp-3"> /{product.category}</p>
    </div>
  );
};

export default ProductCard;
