import styles from './ProductsPage.module.scss'
import {useSelector} from "react-redux";
import {productList} from "../../selectors/selectors";
import {Product} from "./Product/Product";

const ProductsPage = () => {

    const productState = useSelector(productList)

    return (
        <div className={styles.root}>
            <h1>Products</h1>
            <div className={styles.items}>
                {productState.map((product) => <Product key={product.id} product={product}/>)}
            </div>
        </div>
    );
};

export default ProductsPage;
