
import axios from 'axios';
import { useRouter } from 'next/router';




export default async (req, res) => {
    
    const { ticker }  = req.query

  try {
    const response = await axios.get(`https://query1.finance.yahoo.com/v8/finance/chart/${ticker}.SA`);

    const data = response.data.chart.result[0].meta;

    const output = {
        "currency":data.currency,
        "symbol": data.symbol,
        "price":data.regularMarketPrice,
        "time": Date.now()
    }

    res.status(200).json(output);

  } catch (error) {
    console.error('Error fetching external data:', error);
    res.status(500).json({ error: 'Failed to fetch external data' });
  }
};
