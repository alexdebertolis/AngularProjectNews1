import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/article';
import { Category } from '../../enum/category';
import { NewsService } from 'src/app/services/api-serv.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  articles: Article[] = []; 
  message: string | null | undefined;

  constructor(
    public newsServ: NewsService,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.getArticles();
    this.articles = [ ];
    //this.getArticles();
    //throw new Error('Method not implemented.');
  }

  log(val: any) {
    console.log(val);
  }
  redirect(i: number) {
    this.router.navigate(['/detail/' + this.articles[i].id]);
  }

  retrieveTest() {
    return this.articles;
  }

  getArticles(): void {
    this.log('get articles start');
    this.newsServ.getArticles().subscribe(
      (articlesList: any) => {       
        this.log(this.articles)
        this.log(articlesList)
        for (let index = 0; index < articlesList.length; index++) {
          this.articles.push({id: articlesList[index].id,
            body: {
              aut: articlesList[index].aut,
              category: articlesList[index].category,
              id_user: articlesList[index].id_user,
              is_deleted: articlesList[index].is_deleted,
              is_public: articlesList[index].is_public,
              thumbnail_image: articlesList[index].thumbnail_image,
              thumbnail_media_type: articlesList[index].thumbnail_media_type,
              update_date: articlesList[index].update_date,
              username:articlesList[index].username
            },
            title: articlesList[index].title,
            subtitle: articlesList[index].subtitle,
            abstract: articlesList[index].abstract,})
        }
      },
      (err: any) => {
        this.articles = new Array<Article>();
        this.message = `An error has ocurred: ${JSON.stringify(err)}`;
        this.log(this.message);
      },
      () => {
        console.log('Operation finished');
      },
    );
    this.log('get articles end');
  }
}
