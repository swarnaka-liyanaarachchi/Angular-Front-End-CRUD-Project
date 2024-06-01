import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrl: './update-inventory.component.css'
})
export class UpdateInventoryComponent implements OnInit {

  id: string = '';
  inventory: Inventory = new Inventory();

  constructor(private inventoryService: InventoryService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.inventoryService.getInventoryById(this.id).subscribe(data => {
      this.inventory = data
    }, error => console.log(error));

  }

  onSubmit() {
    this.inventoryService.updateInventory(this.id, this.inventory).subscribe(data => {
      this.gotoInventoryList();
    }, error => console.log(error));
  }

  gotoInventoryList() {
    this.router.navigate(['/inventory', this.inventory.itemId]);
  }
}



  // onSubmit() {
  //   this.inventoryService.updateInventory(this.id, this.inventory).subscribe(data => {
  //     this.gotoToInventoryList()
  //   }
  //     , error => console.log(error))
  // }

  // gotoToInventoryList() {
  //   this.router.navigate(['/inventory']);

  // }



