import StockCard from "../stockCard/StockCard"
import "./container.css"

function StockConatiner(){
const stocks = [
  {
    id: 1,
    name: "Apple Inc.",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    price: "$150.10",
    change: "+1.2%",
  },
  {
    id: 2,
    name: "Tesla Inc.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    price: "$1000.30",
    change: "-0.5%",
  },
  {
    id: 3,
    name: "Amazon",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    price: "$2000.50",
    change: "+2.3%",
  },
  {
    id: 4,
    name: "Microsoft",
    imageUrl: "https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png",
    price: "$300.45",
    change: "+0.8%",
  },
  {
    id: 5,
    name: "Google",
    imageUrl: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
    price: "$2500.60",
    change: "+1.5%",
  },
  {
    id: 6,
    name: "Facebook",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    price: "$340.70",
    change: "-0.2%",
  },
  {
    id: 7,
    name: "Netflix",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    price: "$650.25",
    change: "+0.4%",
  },
  {
    id: 8,
    name: "NVIDIA",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    price: "$1800.80",
    change: "+3.1%",
  },
  {
    id: 9,
    name: "Intel",
    imageUrl: "https://pngimg.com/d/intel_PNG1.png",
    price: "$55.60",
    change: "-1.0%",
  },
  {
    id: 10,
    name: "Adobe",
    imageUrl: "https://1000logos.net/wp-content/uploads/2021/04/Adobe-logo.png",
    price: "$480.90",
    change: "+2.0%",
  },
];

    return(
        <div>
            <div className="stocks-container" id="stocks">
        {stocks.map((stock) => (   
          <StockCard key={stock.id} stock={stock} />
        ))}
      </div>
        </div>
    )
}

export default StockConatiner