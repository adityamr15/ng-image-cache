# ngx-image-cache

This library will stored image base64 data to windows object and `<img/>` element will be load image data from windows object.  

## Installation

```sh
npm install --save ngx-image-cache
```

## How to use?
Need to import `NgxImageCacheModule` in `AppModule`.

```ts
import { NgxImageCacheModule } from 'ngx-image-cache';

@NgModule({
  ...
  imports: [
    ...
    NgxImageCacheModule
    ...
  ],
  ...
  bootstrap: [AppComponent]
})
export class AppModule { }

```

In your html component. Just call the library component like below.
```html
<ngx-image-cache
  src="/your/image/url.png"></ngx-image-cache>
```


## To Do
For the next development image data will be stored to indexDB instead windows object (need to do RnD for that).

## License
MIT
