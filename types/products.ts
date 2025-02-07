export interface Product {
  productName: any;
  inventory: any;
  rating: number;
  name: string| Iterable<string>; // For supporting i18n children
  image?: {
    _ref: string; // Optional image reference
    _type: "image"; // Image type definition
  };
  _id: string; // Unique identifier for the product
  Productname: string; // Product name (consider renaming to `productName` for better casing convention)
  _type: "product"; // Type definition
  price: number; // Product price
  description?: string; // Optional product description
  slug : {
    _type : "slug"
    current : string;
  };
  

}

