import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }
    withoutPurchase(): number{
        const items = this.items;
        return items.reduce((acc, item)=>{
            return acc+= item.price;
        }, 0);
    }
    withPurchase(purchase: number): number{
        const cost = this.withoutPurchase();
        return cost*(100 - purchase)*0.01;
    }
    remove(id:number): void{
        this._items = this._items.filter((item) => {return item.id != id});
    }
}