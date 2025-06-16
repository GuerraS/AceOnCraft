import { FixesI } from "./advance-weapon.interface";

export interface FixStrategy {
  getItemList(): FixesI[];
}