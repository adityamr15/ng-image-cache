import { Injectable } from '@angular/core';

@Injectable()
export class NgxImageCacheService {

  async fetchImageBase64(url: string, opt?: any): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fetch(url);
        const blob = await res.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
          resolve((reader.result as string));
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        reject(error);
      }
    });
  }
}
