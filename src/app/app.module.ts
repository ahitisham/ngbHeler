import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {routes} from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CONDITIONSComponent } from './conditions/conditions.component';
import { GALLERYComponent } from './gallery/gallery.component';
import { CAREERSComponent } from './careers/careers.component';
import { CONTACTComponent } from './contact/contact.component';
import { BLOGSComponent } from './blogs/blogs.component';
import { LOGINComponent } from './login/login.component';
import { REGISTERComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { SliderComponent } from './slider/slider.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { TechnologyTreatmentComponent } from './technology-treatment/technology-treatment.component';
/*import { TechnologyComponent } from './technology/technology.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    CONDITIONSComponent,
    GALLERYComponent,
    CAREERSComponent,
    CONTACTComponent,
    BLOGSComponent,
    LOGINComponent,
    REGISTERComponent,
    SubscribeComponent,
    TestimonialComponent,
    SliderComponent,
    BookAppointmentComponent,
    TechnologyTreatmentComponent,
   /* TechnologyComponent
*/
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
