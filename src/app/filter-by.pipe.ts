import { Pipe, PipeTransform } from '@angular/core';
interface AxisItem {
  value: number;
  viewValue: {
    measureName: string;
    measureLabel: string;
  };
}

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {


  // transform(items: any[], searchText: string, selectedItems: any[]): any[] {

  //   console.log("items :"+JSON.stringify(items));
  //   console.log("searchText :"+searchText);
  //   console.log("selected Items :"+selectedItems);
  //   if (!items) return [];
  //   if (!searchText) return selectedItems.concat(items.filter(item => !selectedItems.includes(item)));
  
  //   const searchWords = searchText.toLowerCase().trim().split(/\s+/g);
  
  //   return selectedItems.concat(items.filter(item => {
  //     const itemText = item.toString().toLowerCase().replace(/\s+/g, ' ');
  //     return searchWords.every(word => itemText.includes(word));
  //   }).filter(item => !selectedItems.includes(item)));
  // }

  
  transform(items: AxisItem[], searchText: string, selectedItems: AxisItem[]): AxisItem[] {
    console.log("items: " + JSON.stringify(items));
    console.log("searchText: " + searchText);
    console.log("selectedItems: " + JSON.stringify(selectedItems));

    if (!items || items.length === 0) {
      return [];
    }
    if (!searchText) return selectedItems.concat(items.filter(item => !selectedItems.includes(item)));

    const searchWords = searchText.toLowerCase().trim().split(/\s+/g);

    return selectedItems.concat(items.filter(item => {
      //console.log(item);
      const itemText = item.viewValue.measureName.toLowerCase().replace(/\s+/g, ' ');
      return searchWords.every(word => itemText.includes(word));
    }).filter(item => !selectedItems.includes(item)));
  }


}
