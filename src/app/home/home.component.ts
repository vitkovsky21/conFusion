import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish!: Dish;
  promotion!: Promotion;
  leader!: Leader;
  dishErrMess!: string;
  promoErrMess!: string;
  leadErrMess!: string;

  constructor(private dishservice: DishService, 
              private promotionservice: PromotionService, 
              private leaderService: LeaderService,
              @Inject('baseURL') public baseURL: any) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
      .subscribe(dish => this.dish = dish, disherrmess => this.dishErrMess = <any>disherrmess);
    this.promotionservice.getFeaturedPromotion()
      .subscribe(promotion => this.promotion = promotion, promoerrmess => this.promoErrMess = <any>promoerrmess);
    this.leaderService.getFeaturedLeader()
      .subscribe(leader => this.leader = leader, leaderrmess => this.leadErrMess = leaderrmess);
  }

}
