//import { Category } from '../enum/category';

export interface Article {
  id: string,
  body: {
    aut: string,
    category: string,
    id_user: string,
    is_deleted: string,
    is_public: string,
    thumbnail_image: string,
    thumbnail_media_type: string,
    update_date: string,
    username:string
  },
  title: string,
  subtitle: string,
  abstract: string,
}
