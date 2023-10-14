
const Cart = ({selected, courses}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <div>
            <h2>No classes selected</h2>
            <p>To select a class, close this window and click on the class card.</p>
        </div>
      : <div>
            <h3>Selected Classes</h3>
            <ul>
                {selected.map(id => (
                <li key={id}>
                    {courses[id].term} CS{courses[id].number}: {courses[id].title} ({courses[id].meets})
                </li>
                ))}
            </ul>
        </div>
    }
  </div>
);

export default Cart;