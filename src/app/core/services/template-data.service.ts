import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TemplateItem } from 'src/app/shared/models/template-item';

export class TemplateDataService {
  // url for real requests
  // private baseUrl = environment.apiUrl;

  // test data
  private templateList: TemplateItem[] = [
    {
      id: 1,
      name: 'One',
      template: `
            <div class='template'>
              <div class='editable'>
                One
              </div>
              <div class='container'>
                  <div class='editable'>
                  Two
                </div>
                <div class='editable'>
                  Three
                </div>
              </div>
            </div>`,
      modified: 1516008350380
    },
    {
      id: 2,
      name: 'Two',
      template: `
            <div class='template'>
              <div class='container'>
                  <div class='editable'>
                  One
                </div>
                <div class='editable'>
                  Two
                </div>
                <div class='editable'>
                  Three
                </div>
              </div>
              <div class='editable'>
                Four
              </div>
            </div>`,
      modified: 1516008489616
    },
    {
      id: 3,
      name: 'Three',
      template: `
            <div class='template'>
              <div class='editable'>
                one
              </div>
              <div class='editable'>
                two
              </div>
              <div class='editable'>
                three
              </div>
            </div>`,
      modified: 1516008564742
    }
  ];

  // constructor(private http: HttpClient) {}

  getTemplateList(): Observable<TemplateItem []> {
    // fake request with mockup data
    return of(this.templateList.slice());

    // real request
    // return this.http.get<TemplateItem[]>(this.baseUrl + 'template-list').pipe(map((res: TemplateItem[]) => {
    //     return res;
    // }),
    // catchError((e) => this.handleError(e)));
  }

  getTemplateById(id: number): Observable<TemplateItem> {
    // fake request with mockup data
    const template = this.templateList.find(it => it.id === +id);
    return of(template);

    // real request
    // return this.http.get<TemplateItem>(this.baseUrl + 'template' + id).pipe(map((res: TemplateItem) => {
    //     return res;
    // }),
    // catchError((e) => this.handleError(e)));
  }

  saveTemplate(updateTemplate: TemplateItem) {
    // fake request with mockup data
    this.templateList.forEach((template, index) => {
      if (template.id === updateTemplate.id) {
          this.templateList[index] = updateTemplate;
      }
    });

    // real request
    // return this.http.post(this.baseUrl + 'template-list', updateTemplate)
    // .pipe(map((res: any) => {
    //     let x = new ServerStatus();
    //     x.id = res;
    //     x.success = true;
    //     return x;
    // }),
    // catchError((ex) => this.handleError(ex)));
  }

  // error handling
  // private handleError(error: HttpErrorResponse | any) {
  //   some error logic
  // }
}
