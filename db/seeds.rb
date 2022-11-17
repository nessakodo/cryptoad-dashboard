User.destroy_all
Coin.destroy_all
Position.destroy_all
Bot.destroy_all
Membership.destroy_all


arbitrage = Bot.create(name: "Arbitrage", description: "Arbitrage involves buying from one platform and selling on another to make a profit. The main aim of arbitrage is to take advantage of the price imbalance across multiple platforms when placing a trade. While arbitrage can yield profits, often these profits are minimal and require large numbers of trades to turn small gains into larger ones.")
lending = Bot.create(name: "Coin Lending", description: "One way to profit from cryptocurrency trading is to lend coins to margin traders, with the understanding that they will pay back the loan with an additional percentage. This coin lending bot allows you to automate the process, reducing (or even obviating) the time needed to set interest rates manually, thereby exploiting potential opportunities." )
margin = Bot.create(name: "Margin Trading", description: "Margin trading refers to borrowing funds from an exchange to execute a trade larger than the equity of the trader's account. It involves leveraging on third-party capital to execute a trade. In margin trading, traders can execute a buy if they believe that the price of a coin will go up and also take a sell when there's a drawdown.")
making = Bot.create(name: "Market Making", description: "Market making refers to buying and selling an asset to take advantage of the difference between the bid and ask prices, which is known as the spread. This market making bot is one that is used to provide liquidity and, allows you to customize your market-making bot for a particular asset and take advantage of the ask and bid prices.")
technical = Bot.create(name: "Technical", description: "Technical trading bots are the most frequently used bots on the market today. Employing predefined technical indicators, this trading bot predicts future price movements of a coin using predefined indicators and signals, which are then used to make a profit. This technical trading bot incorporates signal and social trading.")

BTC = Coin.create(name: 'Bitcoin', symbol: 'BTC', api_id: '90')
LTC = Coin.create(name: 'Litecoin', symbol: 'LTC', api_id: '1')
ZEC = Coin.create(name: 'Zcash', symbol: 'ZEC', api_id: '134')
BCH = Coin.create(name: 'Bitcoin Cash', symbol: 'BCH', api_id: '2321')
Coin.create(name: 'Ethereum', symbol: 'ETH', api_id: '80')
Coin.create(name: 'Ripple', symbol: 'XRP', api_id: '58')
Coin.create(name: 'Monero', symbol: 'XMR', api_id: '28')
Coin.create(name: 'NEM', symbol: 'XEM', api_id: '70')
Coin.create(name: 'Dash', symbol: 'DASH', api_id: '8')
Coin.create(name: 'IOTA', symbol: 'MIOTA', api_id: '447')

nessa = User.create(email: 'nessa@nessakodo.com', name: 'Nessa Kodo', password: 'kodo', password_confirmation: 'kodo')

nessa.positions.create(shares: 3, purchase_price: 42000.99, purchase_date: '2017-05-26', coin_id: BTC.id)
nessa.positions.create(shares: 10, purchase_price: 1750.20, purchase_date: '2017-07-02', coin_id: LTC.id)
nessa.positions.create(shares: 50, purchase_price: 25789.75, purchase_date: '2017-09-28', coin_id: ZEC.id)
nessa.positions.create(shares: 5, purchase_price: 13750.65, purchase_date: '2017-12-12', coin_id: BCH.id)


nessa.active_bots.create(bot_id: 3)