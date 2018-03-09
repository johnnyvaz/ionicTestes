import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-filmes',
  templateUrl: 'filmes.html',
})
export class FilmesPage {


  private url: string = 'https://api.themoviedb.org/3/movie/upcoming?api_key=fe65f8e840e15d06c5c00bf13084da74&language=pt-BR&page=1'
  public results: Array<{}>;


  constructor(public navCtrl: NavController,
    public http: Http) {
    this.getDados();
  }
//funcão para pegar os dados da api
  getDados() {
    this.http.get(this.url)
      .map(res => res.json())
      .subscribe(data => {
        this.results = data.results;
        console.log(this.results);
      });
  }

  // getItens(ev: any) {
  //   this.getDados();
  //   let val = ev.target.value;
  //   let result;
  //   if (val && val.trim() != '') {
  //     result = this.results.filter((item) => {
  //       return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     });
  //   }

  //   setTimeout(() => {
  //     this.results = result.data;
  //     console.log(this.results);
  //   }, 500);
  // }
}
