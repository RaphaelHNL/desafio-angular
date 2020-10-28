import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Dogs {
  id: number,
  name: string,
  breed: string,
  imagem: string,
  faceImg: string,
  description: string,
}

const urlBase = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  listDogs(){
    return this.http.get<Dogs[]>(`${urlBase}/dogs?_sort=name`)
  }

}
