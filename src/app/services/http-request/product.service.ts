import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ENDPOINT = 'https://api.unsplash.com/search/photos/';
  ACCES_KEY = '-3xOl_8KyfJy_flMdMo24S8k6IUqaPF_hJHRC8yGABY';

  products: Product[] = [
    {
      id: '1',
      title: 'titulo 1',
      imageURL: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg',
      comments: ['dasldkjaskldj','asdjaskdljasl', 'asf asjfashfalskf']
    },
    {
      id: '2',
      title: 'titulo 2',
      imageURL: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg',
      comments: ['dasldkjaskldj','asdjaskdljasl', 'asf asjfashfalskf']
    },
    {
      id: '3',
      title: 'titulo 3',
      imageURL: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg',
      comments: ['dasldkjaskldj','asdjaskdljasl', 'asf asjfashfalskf']
    },
    {
      id: '4',
      title: 'titulo 4',
      imageURL: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg',
      comments: []
    },
  ]

  constructor(private httpClient: HttpClient) { }

  getImages(image: string){
    return this.httpClient.get<any[]>(
      `${this.ENDPOINT}?query=${image}&client_id=${this.ACCES_KEY}`
    );
  }

  getImage(id: string){
    return this.httpClient.get<any>(
      `https://api.unsplash.com/photos/${id}?client_id=${this.ACCES_KEY}`
    );
  }
  
  getProducts(){
    return [...this.products];
  }

  getProduct(id:string){
    return {
      ...this.products.find(product => {
        return product.id === id
      })
    }
  }

  createProduct(title: string, imageURL: string){
    this.products.push({
      id: this.products.length + 1 + "",
      title,
      imageURL,
      comments:[]
    });
  }

  updateProduct(){}

  deleteProduct(id:string){
      this.products = this.products.filter(product => {
        return product.id !== id;
      })   
  }

}
