import { Component, OnInit } from '@angular/core';
import { forumService } from '../services/forum.services';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  data: any[];
  constructor(
    private forumService: forumService
  ) { }

  ngOnInit(){
    this.getAll();
  }
  getAll() {
    this.forumService.getAll().subscribe(res => {
      console.log('res', res)
      this.data = res;
      console.log('data', this.data)
    });
  }

  deleteArt(id)
  {
    console.log(id);
    this.forumService.delete(id).subscribe((result) => {
      this.getAll();
    });
  }
}
