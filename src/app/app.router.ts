import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component"
import { AboutComponent } from "./about/about.component";
import { ServicesComponent } from "./services/services.component";
import { CONDITIONSComponent } from "./conditions/conditions.component";
import { BLOGSComponent } from "./blogs/blogs.component";
import { CAREERSComponent } from "./careers/careers.component";
import { GALLERYComponent } from "./gallery/gallery.component";
import { LOGINComponent } from "./login/login.component";
import { REGISTERComponent } from "./register/register.component";
import { TechnologyTreatmentComponent } from "./technology-treatment/technology-treatment.component";

export const router:Routes=[
	{path:'',redirectTo:'home',pathMatch:'full'},
	{path:'home',component:HomeComponent},
	{path:'services',component:ServicesComponent},
	{path:'about',component:AboutComponent},
	{path:'condition',component:CONDITIONSComponent},
	{path:'blog',component:BLOGSComponent},
	{path:'careers',component:CAREERSComponent},
	{path:'gallery',component:GALLERYComponent},
	{path:'login',component:LOGINComponent},
	{path:'register',component:REGISTERComponent},
	{path:'technology-treatment',component:TechnologyTreatmentComponent}
	
	
];

export const routes:ModuleWithProviders=RouterModule.forRoot(router);
