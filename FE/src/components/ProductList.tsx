import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button.js";
import { Toaster } from "../components/ui/toaster";
import { useToast } from "../components/ui/use-toast";
import { Product } from "../interfaces/index.js";
import {
  deleteProduct,
  fetchProducts,
} from "../redux/products/productActions.js";

function ProductList() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const productsState = useSelector((state) => state.products);
  const { productsList } = productsState;

  const handleDelete = (productId: string) => {
    dispatch(deleteProduct(productId));
    toast({
      variant: "success",
      description: "Delete Successfully",
    });
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {productsList.map((product: Product, index: number) => (
              <tr key={`product-${index}`} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {product._id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.categoryId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </Button>
                  <Link
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    to={`/admin/product/edit/${product._id}`}
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Toaster />
      </div>
    </div>
  );
}

export default ProductList;
