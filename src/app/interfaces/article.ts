import { Category } from '../enum/category';

export interface Article {
  id: number;
  id_user: number;
  image_data: string;
  image_media_type: string;
  update_date: string;
  title: string;
  subtitle: string;
  category: Category;
  abstract: string;
}
