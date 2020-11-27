import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class DataResolverService implements Resolve<any> {

  constructor(private dataService: DataService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    return this.dataService.getData(id);
  }
}
