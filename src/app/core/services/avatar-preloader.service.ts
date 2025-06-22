import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AvatarPreloaderService {
  preload(urls: string[]): Promise<void> {
    return new Promise(resolve => {
      if (!urls.length) return resolve();
      let loaded = 0;
      urls.forEach(url => {
        const img = new Image();
        img.onload = img.onerror = () => {
          loaded++;
          if (loaded === urls.length) resolve();
        };
        img.src = url;
      });
    });
  }
}