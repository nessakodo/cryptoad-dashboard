User.destroy_all
Coin.destroy_all
Position.destroy_all

nessa = User.create(email: 'nessa@nessakodo.com', name: 'Nessa Kodo', password: 'kodo', password_confirmation: 'kodo')

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

nessa.positions.create(shares: 3, purchase_price: 42000.99, purchase_date: '2017-05-26', coin_id: BTC.id)
nessa.positions.create(shares: 10, purchase_price: 1750.20, purchase_date: '2017-07-02', coin_id: LTC.id)
nessa.positions.create(shares: 50, purchase_price: 25789.75, purchase_date: '2017-09-28', coin_id: ZEC.id)
nessa.positions.create(shares: 5, purchase_price: 13750.65, purchase_date: '2017-12-12', coin_id: BCH.id)
