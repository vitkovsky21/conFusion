import { Component, Inject, OnInit } from '@angular/core';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { baseURL } from '../shared/baseurl';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders!: Leader[];
  errMess!: string;

  constructor( private leaderService: LeaderService,
               @Inject('baseURL') public baseURL: any) { }

  ngOnInit(): void {
    this.leaderService.getLeaders()
      .subscribe(leaders => this.leaders = leaders, errmess => this.errMess = errmess);
  }

  

}
