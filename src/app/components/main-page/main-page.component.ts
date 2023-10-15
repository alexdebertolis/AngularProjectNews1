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
  articles: Article[];
  message: string | null;

  constructor(
    public newsServ: NewsService,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.getArticles();
    this.articles = [
       {
        id: 100,
        id_user: 1,
        abstract: '',
        subtitle: '',
        update_date: '',
        category: Category.National,
        title: '',
        image_data: '',
        image_media_type: '',
      }
    ];
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
      (articlesList: Article[]) => {       
        this.articles = articlesList;
        this.log(this.articles)
      },
      (err) => {
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
