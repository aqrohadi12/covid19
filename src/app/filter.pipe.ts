import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  	transform(items: any[], searchText: string): any[] {
    	if(!items) return [];
    	if(!searchText) return items;
		searchText = searchText.toLowerCase();
		return items.filter( it => {
      		return it.toLowerCase().includes(searchText);
    	});
   	}

}

@Pipe({
    name: 'filterdesc',
    pure: false
})
export class FilterDescPipe implements PipeTransform {
    transform(items: any[], term): any {
        if(term != undefined){
        	term = term.toLowerCase();
        }
        return term 
            ? items.filter(item => item.guName.toLowerCase().indexOf(term) !== -1)
            : items;
    }
}

@Pipe({
    name: 'filterRdesc',
    pure: false
})
export class FilterDescRPipe implements PipeTransform {
    transform(items: any[], term): any {
        if(term != undefined){
          term = term.toLowerCase();
        }
        return term 
            ? items.filter(item => item.routeName.toLowerCase().indexOf(term) !== -1)
            : items;
    }
}