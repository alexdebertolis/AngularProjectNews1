//import { Category } from '../enum/category';

export interface Article {
<<<<<<< Updated upstream
  id: number;
  id_user: number;
  image_data: string;
  image_media_type: string;
  update_date: string;
  title: string;
  subtitle: string;
  category: Category;
  abstract: string;
=======
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
>>>>>>> Stashed changes
}
