import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class PostService {
   
    constructor(public http: Http) {
        
    }

 
        getJsonData(){
            return this.http.get('https://photocloudapp.herokuapp.com/api/v1/posts').map(res => res.json());
        }
    
    


   


}