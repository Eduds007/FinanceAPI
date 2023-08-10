import axios from 'axios';
import { useRouter } from 'next/router';

// RETORNA SELIC

/**
 * @swagger
{
    "/api/selic": {
      "get": {
        "tags": [
          "Indices Macroeconômicos"
          ],
        "summary": "Retorna a taxa selic",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "example": {
                  "selic": 13.25,
                  "start-date": "2023-08-03T03:00:00Z",
                  "end-date": null
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
    
    

  try {
    const response = await axios.get(`https://www.bcb.gov.br/api/servico/sitebcb/historicotaxasjuros`);

    const data = response.data.conteudo[0];
    
    const output = {
        "selic": data.MetaSelic,
        "start-date":data.DataInicioVigencia,
        'end-date':data.DataFimVigencia
       
    }

    res.status(200).json(output);

  } catch (error) {
    console.error('Error fetching external data:', error);
    res.status(500).json({ error: 'Failed to fetch external data' });
  }
};
