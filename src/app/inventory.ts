export class Inventory {
  id?: string;
  itemId?: string;
  purchasePrice?: number;
  salesPrice?: number;
  batchNumber?: string;
  expiryDate?: Date;
  stock?: number;

  // constructor(
  //   id: string = '',
  //   itemId: string = '',
  //   purchasePrice: number = 0,
  //   salesPrice: number = 0,
  //   batchNumber: string = '',
  //   expiryDate: Date = new Date(),
  //   stock: number = 0
  // ) {
  //   this.id = id;
  //   this.itemId = itemId;
  //   this.purchasePrice = purchasePrice;
  //   this.salesPrice = salesPrice;
  //   this.batchNumber = batchNumber;
  //   this.expiryDate = expiryDate;
  //   this.stock = stock;
  // }
}
