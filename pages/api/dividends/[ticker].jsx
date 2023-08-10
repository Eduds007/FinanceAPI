import axios from 'axios';
import cheerio, { load } from 'cheerio';

// RETORNA DIVIDENDOS DA AÇÃO

/** 
 * @swagger
{
    "/api/dividends/{ticker}": {
        "get": {
            "summary": "Retorna dividendos por ação",
          "tags": [
            "Indices Macroeconômicos"
          ],
            "parameters": [
                {
                    "name": "ticker",
                    "in": "path",
                    "description": "ticker da empresa listada",
                    "required": true,
                    "type": "string"
                }
            ],
            "responses": {
                "200": {
                    "description": "Successful response",
                    "content": {
                        "application/json": {
                            "example": {
                                "type": "jscp",
                                "approval-date": "2022-05-09",
                                "payment-date": "2022-07-01",
                                "ex-date": "2022-06-01",
                                "value": {
                                    "ITSA3": 0.0235295,
                                    "ITSA4": 0.0235295
                                }
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
  const { ticker } = req.query;

  try {
    const response = await axios.get(
      `http://dividendobr.com/lib/search.php?q=${ticker}`
    );

    const $ = load(response.data);

    const scrapedData = [];

    $('small').each((index, element) => {
      const text = $(element).text();

      const type_regex = /(jscp)|(dividendos)/;
      const date_regex = /(\d{4}-\d{2}-\d{2})/g;
      const ticker_regex = /(\(\w+\))/g;
      const provent_regex = /(\d,\d+)/g;

      const values = {};

      const ticker = text.match(ticker_regex);
      const provent = text.match(provent_regex);

      //console.log(text)

      for (let index = 0; index < ticker.length; index++) {
        const no_parenthesis = (ticker[index] ?? 'ação').replace(/\(|\)/g, '');

        if (provent != null) {
          values[no_parenthesis] = parseFloat(
            (provent[index] ?? '0.00').replace(/(\,)/g, '.')
          );
        } else {
          values[no_parenthesis] = 0;
        }
      }

      const event = {
        //'text':text,
        type: text.match(type_regex)[0],

        'approval-date': text.match(date_regex)[0],
        'payment-date': text.match(date_regex)[1],
        'ex-date': text.match(date_regex)[2],
        value: values,
      };

      scrapedData.push(event);
    });

    res.status(200).json(scrapedData);
  } catch (error) {
    console.error('Error fetching external data:', error);
    res.status(500).json({ error: 'Failed to fetch external data' });
  }
};
