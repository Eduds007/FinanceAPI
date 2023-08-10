
import axios from 'axios';
import { useRouter } from 'next/router';

/**
 * @swagger
{
    "/api/prices/{ticker}": {
        "get": {
            "summary": "Retornao preço da empresa listada",
          "tags": [
          "Indices Macroeconômicos"
          ],
            "parameters": [
                {
                    "name": "ticker",
                    "in": "path",
                    "description": "ticker da empresa listada",
                    "required": true,
                    "type": "string",
                    
                    }
            ],
            "responses": {
                "200": {
                    "description": "Successful response",
                    "content": {
                        "application/json": {
                            "example": {
                                
                                    "currency": "BRL",
                                    "symbol": "BBAS3.SA",
                                    "price": 46.98,
                                    "time": 1691689772143

                            }
                        }
                    }
                }
            }
        }
    }
}
*/


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
