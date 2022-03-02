import { Component, Input, OnInit } from '@angular/core';
import { NgxImageCacheService } from './ngx-image-cache.service';

@Component({
  selector: 'ngx-image-cache',
  template: `
    <img [src]="base64">
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }

      img {
        width: 100%;
        height: 100%;
      }
    `
  ]
})
export class NgxImageCacheComponent implements OnInit {

  @Input() src = '' as any;

  base64 = '';

  private ngxCachedObject = 'ngxImageCachedObject' as any;

  constructor(private service: NgxImageCacheService) { }

  ngOnInit() {
    this.base64 = this.loadCachedData;

    if (!this.base64) {
      !!this.src && this.fetch();
    }
  }

  private get loadCachedData(): string {
    try {
      return (window[this.ngxCachedObject][this.src as any] as any);
    } catch (error) {
      window[this.ngxCachedObject] = {} as any;
      return null as any;
    }
  }

  private saveCachedData(data: any): string {
    return window[this.ngxCachedObject][this.src as any] = data;
  }

  private async fetch() {
    try {
      this.base64 = await this.service.fetchImageBase64(this.src);
      this.saveCachedData(this.base64);
    } catch (error) {
      this.base64 = this.src
    }
  }
}
