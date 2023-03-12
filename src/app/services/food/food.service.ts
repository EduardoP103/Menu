import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }


  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return [
      {name: 'Todo', count: 14 },
      {name: 'desayuno', count: 4 },
      {name: 'almuerzo', count: 2 },
      {name: 'cena', count: 3 },
      {name: 'postre', count: 2},
      {name: 'fruta', count: 1 },
      {name: 'vegetales', count: 1 },
    ]
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "Todo" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Arroz Verde',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['peru'],
        stars: 4.5,
        imageUrl: '/assets/images/arroz_verde.jpg',
        tags: ['almuerzo', 'cena'],
      },
      {
        id: 2,
        name: 'Chiuche',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['cajamarca'],
        stars: 4.7,
        imageUrl: '/assets/images/chiuche.png',
        tags: ['desayuno', 'postre'],
      },
      {
        id: 3,
        name: 'Humitas',
        price: 15,
        cookTime: '5-15',
        favorite: true,
        origins: ['cajamarca'],
        stars: 5,
        imageUrl: 'assets/images/humitas.jpg',
        tags: ['desayuno', 'cena', 'postre']
      },
      {
        id: 4,
        name: 'Papa Rellena',
        price: 15,
        cookTime: '5-15',
        favorite: true,
        origins: ['cajamarca'],
        stars: 5,
        imageUrl: 'assets/images/papa_rellena.jpeg',
        tags: ['desayuno', 'postre']
      },
      {
        id: 5,
        name: 'Pollo a la plancha',
        price: 20,
        cookTime: '10-15',
        favorite: true,
        origins: ['peru'],
        stars: 4.1,
        imageUrl: 'assets/images/pollo_a_la_plancha.jpg',
        tags: ['almuerzo'],

      }


    ]
  }
}
