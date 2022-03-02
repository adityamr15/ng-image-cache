import { NgModule } from '@angular/core';
import { NgxImageCacheComponent } from './ngx-image-cache.component';
import { NgxImageCacheService } from './ngx-image-cache.service';

@NgModule({
  declarations: [NgxImageCacheComponent],
  exports: [NgxImageCacheComponent],
  providers: [NgxImageCacheService]
})
export class NgxImageCacheModule { }
