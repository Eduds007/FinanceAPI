

import axios from 'axios';
import { useRouter } from 'next/router';
import { start } from 'repl';

// RETORNA PREÇO DA AÇÃO 

export default async (req, res) => {
    
    const { ticker, start, end }  = req.query


    const start_tmsp = isNaN(new Date(start).getTime() ) ? new Date().getTime()/1000 : new Date(start).getTime()/1000
    const end_tmsp = isNaN(new Date(end).getTime() ) ? new Date().getTime()/1000 : new Date(end).getTime()/1000

    console.log(typeof(end_tmsp))
  try {
    const response = await axios.get(`https://query1.finance.yahoo.com/v7/finance/download/${ticker}.SA?period1=${start_tmsp | 0}&period2=${end_tmsp | 0}&interval=1d&events=history`);

    const data = response.data
    
    const lines = data.split('\n')
    const headers = lines[0].split(',')

    const output = []

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const entry = {};

        for (let j = 0; j < headers.length; j++) {
            entry[headers[j]] = values[j];
          }
        
        output.push(entry);
    }


    res.status(200).json(output);

  } catch (error) {
    console.error('Error fetching external data:', error);
    res.status(500).json({ error: 'Failed to fetch external data' });
  }
};