/**
 * version 1.0
 * cache class
 * todo: storage mode not implemented
 */

type AnyObject = { 
  [key: string]: any 
};

export type CacheOptions = {
  maxAge: number;
  maxItems: number;
}

type CacheItem = {
  created: number;
  value: AnyObject;
}

type CacheDict = { [key: string]: CacheItem };

export class Cache {
  maxAge: number;
  maxItems: number;
  contents: CacheDict;

  constructor(options: CacheOptions) {
    this.maxAge = options.maxAge;
    this.maxItems = options.maxItems;
    this.contents = {};
  }

  get(key: string): AnyObject | null {
    if (key in this.contents) {
      const now = new Date().getTime();
      const item = this.contents[key];
      if ((now - item.created) < this.maxAge) {
        return this.contents[key].value;
      }

      delete this.contents[key];
    }

    return null;
  }

  set(key: string, value: AnyObject): void {
    if (Object.keys(this.contents).length >= this.maxItems) {
      this.removeOldest();
    }

    this.contents[key] = {
      created: new Date().getTime(),
      value
    }
  }

  reset(): void {
    this.contents = {};
  }

  remove(key: string): void {
    if (key in this.contents) {
      delete this.contents[key];
    }
  }

  removeOldest(): void {
    const keys = Object.keys(this.contents);
    if (!keys) return;

    let ageMin = 0;
    const oldestKey = keys.reduce(
      (old: string, cur: string, idx: number, arr: string[]) => {
        if (ageMin === 0 || ageMin < this.contents[cur].created) {
          ageMin = this.contents[cur].created;
          return cur;
        }

        return old;
      }
    )

    if (oldestKey) delete this.contents[oldestKey];
  }
}
