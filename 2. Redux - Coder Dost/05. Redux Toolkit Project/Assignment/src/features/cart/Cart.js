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
              <p>Quantity</p>
              <div>
                <button onClick={() => {
                  const newItem = parseInt(item.quantity) + 1
                  if (newItem < 4) {
                    dispatch(updateAsync({ id: item.id, itemQuantity: { quantity: newItem } }))
                  } else {
                    dispatch(updateAsync({ id: item.id, itemQuantity: { quantity: item.quantity } }))
                  }
                }}>
                  +
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => {
                  const newItem = parseInt(item.quantity) - 1
                  if (newItem > 0) {
                    dispatch(updateAsync({ id: item.id, itemQuantity: { quantity: newItem } }))
                  } else {
                    dispatch(updateAsync({ id: item.id, itemQuantity: { quantity: item.quantity } }))
                  }
                }}>
                  -
                </button>
              </div>
            </div>
            <div className={styles.close}>
              <button
                onClick={() =>
                  dispatch(deleteAsync(item.id))}>
                X
              </button>
            </div>
          </div>
        ))}

        Total: {items.reduce((acc, item) => item.price * item.quantity + acc, 0)}

      </div>
    </div>
  );
}
