import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { ProductComponent } from './app/components/product/product.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    importProvidersFrom(),
    provideRouter([
      {path:"",pathMatch:"full",component:ProductComponent},
      {path:"products",component:ProductComponent},
      {path:"products/category/:categoryId",component:ProductComponent}

    ])
  ]
})
.catch(err => console.error(err));