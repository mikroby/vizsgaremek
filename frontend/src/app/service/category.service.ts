import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../model/category';
import { BaseService } from './base.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService<Category> {

  constructor(
    public override http: HttpClient,
  ) {
    super(http);
    this.entityName = 'category';
  }

}

// constructor() { }

// getAll(): Observable < Category[] > {
//   return of(this.list)
// }


// list: Category[] = [
//   {
//     _id: 'qwetqertert23',
//     categoryID: 1,
//     name: 'Informatika',
//     job: [
//       'Adatmentés',
//       'Alkalmazás készítés és tervezés',
//       'Karbantartás',
//       'PC hardware',
//       'Rendszer optimalizálás',
//       'Telepítés',
//       'Üzemeltetés',
//       'Weblap készítés és tervezés'
//     ]
//   },
//   {
//     _id: 'qwetqez455z2rtert23',
//     categoryID: 2,
//     name: 'Építőipar',
//     job: [
//       'Ács és tetőfedő',
//       'Asztalos',
//       'Burkoló',
//       'Építészmérnök',
//       'Épületgépész mérnök',
//       'Épületvillamossági mérnök',
//       'Felelős műszaki vezető',
//       'Felújítás',
//       'Festő',
//       'Geodéta',
//       'Gipszkartonozó',
//       'Kertépítés',
//       'Költségvetés készítő',
//       'Kőműves',
//       'Lakatos',
//       'Műszaki ellenőr',
//       'Projekt-menedzser',
//       'Tartószerkezet tervező',
//       'Villanyszerelő',
//       'Víz-gáz-fűtés szerelő'
//     ]
//   },
//   {
//     _id: 'qwetzrz2zz2rtert23',
//     categoryID: 3,
//     name: 'Háztartás / kert',
//     job: [
//       'Bevásárlás',
//       'Fakivágás',
//       'Gyermekfelügyelet',
//       'Háziállat felügyelet',
//       'Idősgondozás',
//       'Javítás-karbantartás',
//       'Kertrendezés',
//       'Takarítás'
//     ]
//   },
//   {
//     _id: 'qwetbdghjet65tert23',
//     categoryID: 4,
//     name: 'Jármű',
//     job: [
//       'Autó üvegezés',
//       'Autó villamosság',
//       'Autószerelő',
//       'Gumiszerelés',
//       'Karosszéria javítás',
//       'Kerékpár javítás'
//     ]
//   },
//   {
//     _id: 'qwevcfgh672rt23',
//     categoryID: 5,
//     name: 'Egészség',
//     job: [
//       'Általános orvos',
//       'Bőrgyógyász',
//       'Fogorvos',
//       'Gyermekorvos',
//       'Gyógytornász',
//       'Masszőr',
//       'Pszichológus',
//       'Yoga-oktató'
//     ]
//   },
//   {
//     _id: 'qwe67z547uttzt23',
//     categoryID: 6,
//     name: 'Szépségápolás',
//     job: [
//       'Fodrász',
//       'Kozmetikus',
//       'Manikűrös',
//       'Műkörömépítő',
//       'Pedikűrös'
//     ]
//   },
//   {
//     _id: 'qwetqez455z2346grtw45',
//     categoryID: 7,
//     name: 'Tanácsadás',
//     job: [
//       'Coach',
//       'Életvezetési tanácsadó',
//       'Könyvelő',
//       'Pénzügyi tanácsadó',
//       'Személyi edző',
//       'Ügyvéd'
//     ]
//   },
//   {
//     _id: 'qwetqez45513241tqg',
//     categoryID: 8,
//     name: 'Oktatás',
//     job: [
//       'Angol',
//       'Biológia',
//       'Dob oktatás',
//       'Ének / hangképzés',
//       'Érettségi-felkészítés',
//       'Felvételi-felkészítés',
//       'Fizika',
//       'Földrajz',
//       'Francia',
//       'Gitár tanítás',
//       'Kémia',
//       'Magyar',
//       'Matematika',
//       'Német',
//       'Olasz',
//       'Rajz',
//       'Spanyol',
//       'Színjátszás',
//       'Társastánc oktatás',
//       'Zongora tanár'
//     ]
//   },
//   {
//     _id: 'qwetqez453422gr245',
//     categoryID: 9,
//     name: '1000 Apró',
//     job: [
//       'Árufuvarozás',
//       'Bútorasztalos',
//       'Cipész',
//       'Cukrász',
//       'Elektronikai műszerész',
//       'Grafikus',
//       'Képkeretező',
//       'Költöztetés',
//       'Kulcsmásoló',
//       'Mobiltelefon javítás',
//       'Rovar és kártevő irtás',
//       'Szakács',
//       'Személyszállítás',
//       'Üveges'
//     ]
//   },
//   {
//     _id: 'qwe2452qzh658i9383',
//     categoryID: 10,
//     name: 'Szórakoztatás / rendezvény',
//     job: [
//       'Arcfestés',
//       'Bábelőadás',
//       'Bohóc',
//       'Bűvész',
//       'Kézműves foglalkozás',
//       'Stand-up',
//       'Táncos',
//       'Télapó',
//       'Zenész'
//     ]
//   }
// ]
