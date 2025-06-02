import './App.css';
import ProductCard from './component/ProductCard';
import productData from './utili/cardData';

function App() {
  return (
    <div className="app-wrapper">
      <h1>Featured Products</h1>
      <div className="product-grid">
        {
          productData.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              price={item.price}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
