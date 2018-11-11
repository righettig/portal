// Copyright Genesis Global Solutions

import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getItem(key: string): string {
    return localStorage.getItem(key);
  }

  getEncryptedItem(key: string, passphrase): any {
    const encryptedItem = localStorage.getItem(key);

    if (encryptedItem) {
      const bytes = AES.decrypt(encryptedItem, passphrase);
      const decryptedData = JSON.parse(bytes.toString(enc.Utf8));

      return decryptedData;
    }

    return null;
  }

  setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  setEncryptedItem(key: string, value: any, passphrase: string) {
    const encryptedItem = AES.encrypt(JSON.stringify(value), passphrase).toString();
    localStorage.setItem(key, encryptedItem);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
