import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {

    currentImage = null;

    constructor( private camera: Camera, private emailComposer: EmailComposer) { }

        captureImage() {
            const options: CameraOptions = {
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.FILE_URI,
            }

            this.camera.getPicture(options).then((imageData) => {
                this.currentImage = imageData;
            }, (err) => {
                // Handle error
                console.log('Image error: ', err);
            });
        }

        sendEmail() {
            let email = {
                to: 'yuriihorbal@gmail.com',
                cc: 'yuriihorbal1@gmail.com',
                attachments: [
                    this.currentImage
                ],
                subject: 'My Cool Image',
                body: 'Hey Simon, what do you thing about this image?',
                isHtml: true
            };

            this.emailComposer.open(email);
        }
    
}