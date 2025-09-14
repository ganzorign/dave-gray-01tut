
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


function App() {

    const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
      id: 2,
      checked: false,
      item: "Item 2"
    },
    {
      id: 3,
      checked: false,
      item: "Item 3"
    }
  ]);
  

  return (
    <div className="App">
      <Header  title="Groceries list" />
      <Content />
      <Footer />
    </div>
  );
}



export default App;
