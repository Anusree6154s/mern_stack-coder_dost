import { useDispatch, useSelector } from 'react-redux';
import { deleteAsync, updateAsync } from './cartSlice';
import styles from './Cart.module.css';

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items)


  return (
    <div>
      <div>

        {items.map(item => (
          <div key={item.id} className={styles['cart-item']}>
            <img
              className={styles['img-fluid']}
              src={item.thumbnail}
              alt={item.title}
            />
            <div className={styles.description}>
              <p>{item.title}</p>
              <span>{item.brand}</span>
              <strong>${item.price}</strong>
            </div>
            <div className={styles.quantity}>
              Quantity
              <select 
              value={item.quantity} 
              onChange={(e)=> dispatch(updateAsync({id:item.id , itemQuantity:{quantity:e.target.value}}))
              }>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
            <div className={styles.close}>
              <button 
              onClick={()=>
                dispatch(deleteAsync(item.id))}>
                X
                </button>
            </div>
          </div>
        ))}

        Total: {items.reduce((acc, item)=>item.price*item.quantity+acc, 0)}

      </div>
    </div>
  );
}
