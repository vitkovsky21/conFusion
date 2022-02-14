import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.getDishes()
      .then(dishes => this.dishes = dishes);
  }

  dishes: Dish[] = DISHES;
  selectedDish!: Dish;

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
