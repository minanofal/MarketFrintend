import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Models/MarketModels/category.model';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  GetAllCategories():Observable<Category[]>{
    const url = "http://www.yarapb2a.somee.com/api/Categories";
    return this.http.get<Category[]>(url);
  }
  CreateCategory( category : any): Observable<Category>{
    const url ="http://www.yarapb2a.somee.com/api/Categories/CreateCategory";
    return this.http.post<Category>(url,category);
  }
  DeleteCategory(category : Category) : Observable<string>{
    const url="http://www.yarapb2a.somee.com/api/Categories/Delete/"+category.id;
    return this.http.delete<string>(url);
  }
  UpdateCategory(category:any , id:string) : Observable<Category>{
    const url="http://www.yarapb2a.somee.com/api/Categories/Update/"+id;
    console.log(category);
    return this.http.put<Category>(url,category);
  }

}
