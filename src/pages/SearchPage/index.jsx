import "./SearchPage.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { STATUS } from "../../utils/status";
import Loader from "../../components/Loader";
import ProductList from "../../components/ProductList";
import {
  fetchAsyncSearchProduct,
  getSearchProducts,
  clearSearch,
} from "../../store/SearchSlice";

function SearchPage() {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const searchProducts = useSelector(getSearchProducts);
  // const searchProductsStatus = useSelector(getSearchProductsStatus);

  useEffect(() => {
    dispatch(clearSearch());
    dispatch(fetchAsyncSearchProduct(searchTerm));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  if (searchProducts.length === 0) {
    return (
      <div
        className="container"
        style={{
          minHeight: "70vh",
        }}
      >
        <div className="fw-5 tetx-danger py-5">
          <h3>No Products found.</h3>
        </div>
      </div>
    );
  }
  return (
    <main>
      <div className="search-content bg-whitesmoke">
        <div className="container">
          <div className="py-5">
            <div className="title-md">
              <h3>Search results:</h3>
            </div>
            <br />
            {searchProducts === STATUS.LOADING ? (
              <Loader />
            ) : (
              <ProductList products={searchProducts} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default SearchPage;
