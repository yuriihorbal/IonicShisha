import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Newpost } from '../../pages/newpost/newpost';
import { PostService } from '../../providers/post-service';


@Component({
    selector: 'page-list',
    templateUrl: 'list.html',
    providers: [PostService]

})
export class ListPage {
    newsData: any;
    loading: any;
    
    constructor(public navCtrl: NavController, 
        private postService: PostService, private loadingCtrl: LoadingController
    ) {
        this.loading = this.loadingCtrl.create({
            content: `
  <ion-spinner ></ion-spinner>`
        });

        this.getdata();
    }


    getdata() {
        let loader = this.loadingCtrl.create({
            content: "Loading Photos..."
        });
        loader.present();
        this.postService.getJsonData().subscribe(

            result => {
                this.newsData = result.posts;
                console.log("Success : " + this.newsData);
            },
            err => {
                console.error("Error : " + err);
            },
            () => {
                console.log('getData completed');
            }
            
        );
        loader.dismiss();
    }

   



    addNewPhoto() {
        this.navCtrl.push(Newpost);
    }

}