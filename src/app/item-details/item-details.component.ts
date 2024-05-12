import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit {

  id: string = '';
  item?: Item;

  constructor(private route: ActivatedRoute, private itemService: ItemService){
  }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id']
    this.item = new Item();
    this.itemService.getItemById(this.id).subscribe(data => {
      this.item = data;
    })
  }
}
