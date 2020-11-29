import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TemplateDataService } from 'src/app/core/services/template-data.service';
import { TemplateItem } from 'src/app/shared/models/template-item';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit, OnDestroy {
  public templateList: TemplateItem[];
  private onDestroy$: Subject<void> = new Subject();
  constructor(private templateDataService: TemplateDataService) { }

  ngOnInit() {
    this.templateDataService.getTemplateList().pipe(takeUntil(this.onDestroy$)).subscribe((templates: TemplateItem[]) => {
      this.templateList = templates;
    });
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
