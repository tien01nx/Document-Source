import { Data } from '@angular/router';
import { MasterEntity } from './master.entity';

export interface CategoryProduct extends MasterEntity {
  parentID: number;
  categoryLevel: number;
  categoryName: string;
  isDeleted: boolean;
  parentName: string;
}
