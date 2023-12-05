import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Constants } from '../shared/constants/constants';
import { Job } from "../models/job";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;
  private jobUrl = this.baseUrl + Constants.APIS.JOBS;
  private itemUrl = this.baseUrl + Constants.APIS.ADD;
  private orderUrl = this.baseUrl + Constants.APIS.ORDER;
  private itemsUrl = this.baseUrl + Constants.APIS.ITEMS;
  private userUrl = this.baseUrl + Constants.APIS.USER;
  private adminJobUrl = this.baseUrl + Constants.ADMIN_ROUTES.JOBS;

  constructor(private http: HttpClient) {}

  getJobs(params: any) {
    return this.http.get<any>(this.jobUrl, params);
  }

  getJobInfo(id: string) {
    return this.http.get<any>(this.jobUrl + '/' + id);
  }

  addJob(requestParams: any) {
    return this.http.post<any>(this.adminJobUrl, requestParams);
  }

  addItem(requestParams: any) {
    return this.http.post<any>(this.itemUrl, requestParams);
  }

  addOrder(requestParams: any) {
    return this.http.post<any>(this.orderUrl, requestParams);
  }

  getItems() {
    return this.http.get<any>(this.itemsUrl);
  }

  getUser(id: any) {
    return this.http.get<any>(this.userUrl + '/' + id);
  }

}
