import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Camera } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        EmailComposer,
        Camera,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }