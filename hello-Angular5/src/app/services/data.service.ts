import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {IDeveloper, ILangageProgrammation} from './interfaces';
import {Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class DataService {

  private url = 'http://localhost:8080/';

  constructor(private http: Http) {
  }

  getAllDevelopers(): Observable<IDeveloper[]> {
    return this.http.get(this.url + 'developers')
      .pipe(map((resp: Response) => resp.json()));
  }

  getAllLangages(): Observable<ILangageProgrammation[]> {
    return this.http.get(this.url + 'languages')
      .pipe(map((resp: Response) => resp.json()));
  }

  saveLangages(langages: ILangageProgrammation[]) {
    return this.http.post(this.url + 'languages/', langages)
      .pipe(map((response: Response) => response.json()));
  }

  handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
