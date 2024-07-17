import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
} from "../../redux/products/productActions.js";
import { Button } from "../../components/ui/button.js";
import { useToast } from "../../components/ui/use-toast";
import { Toaster } from "../../components/ui/toaster";

function Dashboard() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const productsState = useSelector((state) => state.products);
  const { productsList, loading } = productsState;
  const handleDelete = (productId: string) => {
    dispatch(deleteProduct(productId));
    toast({
      variant: "success",
      description: "Delete Succesfully",
    });
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div>Sibar</div>
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product, index) => (
              <tr key={`product-${index}`}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product?.categoryId}</td>
                <td>
                  <Button
                    className="mx-4"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </Button>
                  <Button className=""> Edit</Button>
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

export default Dashboard;
