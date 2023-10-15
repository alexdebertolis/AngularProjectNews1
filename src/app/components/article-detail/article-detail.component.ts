import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/article';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
import { MainPageComponent } from '../main-page/main-page.component';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  article: Article;

  constructor(
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public main: MainPageComponent,
  ) {}
  id: number = this.route.snapshot.params['id'] - 1;
  data: any = this.main.retrieveTest();

  ngOnInit(): void {
    
  }
  log(val: any) {
    console.log(val);
  }
}
