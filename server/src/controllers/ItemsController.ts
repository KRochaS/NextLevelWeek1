import knex from '../database/connection';
import { Request, Response } from 'express';

class ItemsController {
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*');
         // SELECT * FROM items
    
         // serializedItems = as informações do banco não estão como precisa
         // retornar para o front, então faz o processo de serialized 
         // para transformar os dados para um novo formato que seja mais acessível
         const serializedItems = items.map(item => {
             return { 
                 id: item.id,
                 title: item.title,
                 image_url: `http://192.168.1.20:3333/uploads/${item.image}`
             }
         })
        return response.json(serializedItems);
     }
}

export default ItemsController;