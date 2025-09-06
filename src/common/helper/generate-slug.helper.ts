import { Injectable } from "@nestjs/common";

@Injectable()
export class GenerateSlug {
  public generateSlug(store_id: string, name: string): string {
    return `${store_id}-${name.toLocaleLowerCase()}`;
  }
}