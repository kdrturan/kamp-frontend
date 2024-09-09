import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideRouter, RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { ProductComponent } from './app/components/product/product.component';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CartSummaryComponent } from './app/components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './app/components/product-add/product-add.component';
import { LoginComponent } from './app/components/login/login.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideToastr({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }), 
    provideRouter([
      {path:"",pathMatch:"full",component:ProductComponent},
      {path:"products",component:ProductComponent},
      {path:"products/category/:categoryId",component:ProductComponent},
      {path:"products/add",component:ProductAddComponent},
      {path:"login",component:LoginComponent}

    ])
  ]
})
.catch(err => console.error(err));