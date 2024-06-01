import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory';
import { InventoryService } from '../inventory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent {

  inventories: Inventory[] = [];
  itemId: string | null = null;


  constructor(private inventoryService: InventoryService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = params['itemId'] || null;
      this.getInventory();
    });
  }

  private getInventory() {
    if (this.itemId) {
      this.inventoryService.getInventoryByItemId(this.itemId).subscribe(data => {
        this.inventories = data;
      });
    } else {
      // Handle case where itemId is not provided, if necessary
    }
  }

  // ngOnInit(): void{
  //   this.getInventory();
  // }

  // private getInventory(){
  //   this.inventoryService.getInventoryList().subscribe(data => {
  //     this.inventories = data;
  //   });
  // }


  updateInventory(id: string){
    this.router.navigate(['update-inventory', id]);
  }

  deleteInventory(id: string){
    this.inventoryService.deleteInventory(id).subscribe(data =>{
      console.log(data)
      this.getInventory() 
    })
  }

  addInventory() {
    this.router.navigate(['create-inventory', this.itemId]);
  }

  goToItemList() {
    this.router.navigate(['/items']); // Navigate to the Item List page
  }

  

}
