import "./about.css"

function About(){
    return(
        <div className="about">
            <div className="about-stock">
        <h1>About the Site </h1>
        <div className="description">
           <p>
            A stock market, equity market, or share market is the aggregation of buyers and sellers of stocks (also called shares), which represent ownership claims on businesses; these may include securities listed on a public stock exchange as well as stock that is only traded privately, such as shares of private companies that are sold to investors through equity crowdfunding platforms. Investments are usually made with an investment strategy in mind. 
            <br /> <br />
          StockTracker is your one-stop platform to stay updated on the latest stock market trends. We provide real-time data on various stocks, including top tech companies, market movements, and stock price changes. Whether you're an investor or just keeping an eye on the market, StockTracker offers a user-friendly experience to help you stay informed and make smarter decisions.
        </p>
        </div>
        <div className="image">
          <img src="https://img.freepik.com/free-vector/stock-market-analysis_23-2148582512.jpg" alt="" />
        </div>
      </div>
        </div>
    )
}

export default About