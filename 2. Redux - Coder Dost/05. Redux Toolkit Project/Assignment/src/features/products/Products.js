import {useDispatch, useSelector } from 'react-redux';
import {fetchAsync, updateAsync} from './productsSlice';
import { addAsync } from '../cart/cartSlice';
import styles from './Products.module.css';
import { useEffect } from 'react';

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.product.products)

  useEffect(() => {
    dispatch(fetchAsync())
  }, [dispatch])


  return (
    <div>
      <div>
        {products.map(product=>(
          <div key={product.id} className={styles.card}>
          <img src={product.thumbnail} alt={product.title} style={{width:"100%"}}/>
            <h1>{product.title}</h1>
            <p className={styles.price}>${product.price}</p>
            <p>{product.description}</p>
            <p className={styles.addSection}>
            <button  onClick={() => dispatch(addAsync(product))}>Add to Cart</button>
            <select 
              value={product.quantity} 
              onChange={(e)=> dispatch(updateAsync({id:product.id , productQuantity:{quantity:e.target.value}}))
              }>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>

            </select>
            </p>
        </div>
        ))}
        
      </div>
    </div>
  );
}
