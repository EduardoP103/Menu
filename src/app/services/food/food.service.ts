import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

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
      {name: 'jugos', count: 2},
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
      },
      {
        id:6,
        name: 'Sopa de Paico',
        price: 20,
        cookTime: '5-8',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/sopa_de_paico.jpg',
        tags: ['almuerzo','cena'],
      },
      {
        id:6,
        name: 'Sudado de pescado con camote',
        price: 20,
        cookTime: '5-8',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/sudado_de_pescado_con_camote.jpg',
        tags: ['almuerzo'],
      },
      {
        id:7,
        name: 'Aguadito',
        price: 7,
        cookTime: '5',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/aguadito.jpg',
        tags: ['almuerzo','cena'],
      },
      {
        id:8,
        name: 'Aji de Gallina',
        price: 15,
        cookTime: '5',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/aji_de_gallina.jpeg',
        tags: ['almuerzo','cena'],
      },
      {
        id:9,
        name: 'Brocoli saltado',
        price: 12,
        cookTime: '5',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/brocoli_saltado.jpg',
        tags: ['almuerzo','cena'],
      },
      {
        id:10,
        name: 'Caldo de Gallina',
        price: 10,
        cookTime: '7',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/caldo_de_gallina.jpg',
        tags: ['almuerzo','cena'],
      },
      {
        id:11,
        name: 'Carapulcra',
        price: 13,
        cookTime: '7',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/carapulcra.jpg',
        tags: ['almuerzo','cena'],
      },
      {
        id:12,
        name: 'Causa rellana',
        price: 13,
        cookTime: '7',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/causa_rellena.jpg',
        tags: ['almuerzo','cena'],
      },
      {
        id:13,
        name: 'Colifor saltada',
        price: 13,
        cookTime: '7',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/colifor_saltado.jpg',
        tags: ['almuerzo','cena'],
      },
      {
        id:14,
        name: 'Jugo de Guanabana',
        price: 10,
        cookTime: '3',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/jugo_guanabana.png',
        tags: ['jugos','desayuno'],
      },
      {
        id:15,
        name: 'Pure de Espinaca',
        price: 15,
        cookTime: '3',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/pure_de_espinaca.jpg',
        tags: ['almuerzo'],
      },
      {
        id:16,
        name: 'Sopa de Chochoca',
        price: 10,
        cookTime: '5',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/sopa_de_chochoca.jpg',
        tags: ['almuerzo', 'cena'],
      },
      {
        id:17,
        name: 'Tallarin Rojo',
        price: 10,
        cookTime: '10',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/tallarin_rojo.jpg',
        tags: ['almuerzo'],
      },
      {
        id:18,
        name: 'Arroz con Leche',
        price: 10,
        cookTime: '5',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/arroz_con_leche.webp',
        tags: ['postre'],
      },
      {
        id:19,
        name: 'Champu',
        price: 10,
        cookTime: '5',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/champu.jpg',
        tags: ['postre'],
      },
      {
        id:20,
        name: 'Dulce de Trigo',
        price: 10,
        cookTime: '5',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/dulce_de_trigo.jpg',
        tags: ['postre'],
      },
      {
        id:21,
        name: 'Gelatina',
        price: 10,
        cookTime: '5',
        favorite: true,
        origins: ['peru'],
        stars: 5,
        imageUrl: 'assets/images/gelatina.jpg',
        tags: ['almuerzo', 'cena'],
      },
    ]
  }
}
