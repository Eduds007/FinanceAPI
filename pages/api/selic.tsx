import axios from 'axios';
import { useRouter } from 'next/router';

// RETORNA SELIC

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
