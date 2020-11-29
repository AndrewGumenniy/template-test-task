import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TemplateDataService } from 'src/app/core/services/template-data.service';
import { TemplateItem } from 'src/app/shared/models/template-item';

@Component({
  selector: 'app-template-item',
  templateUrl: './template-item.component.html',
  styleUrls: ['./template-item.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TemplateItemComponent implements AfterViewInit, OnDestroy {
  @ViewChild('template', { static: true }) public templateView: ElementRef;
  public templateItem: TemplateItem;
  public showEditPanel = false;
  public templateName: string;
  public fontSize: string;
  private ActiveElement: any;
  private onDestroy$: Subject<void> = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private templateDataService: TemplateDataService,
    private renderer: Renderer2
  ) {
      this.activatedRoute.params.pipe(takeUntil(this.onDestroy$)).subscribe((param: Params) => {
        const id = param.id;
        if (id) {
            this.templateDataService.getTemplateById(id).pipe(takeUntil(this.onDestroy$)).subscribe((template: TemplateItem) => {
              this.templateItem = template;
            });
        }
      });
  }

  public ngAfterViewInit(): void {
    this.renderer.listen(this.templateView.nativeElement, 'click', (currentEl) => {
      this.ActiveElement = currentEl;
      this.SetSelectedItem(currentEl);
      this.EditTemplate(currentEl);
    });
  }

  public changeName(name: string) {
    this.ActiveElement.target.innerText = name;
    this.updateTemplate();
  }

  public changeFontSize(fontSize: string) {
    this.ActiveElement.target.style.fontSize = fontSize;
    this.updateTemplate();
  }

  public ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private SetSelectedItem(currentEl) {
    const template = this.templateView.nativeElement;
    const activeElement = template.querySelector('.active');
    if (activeElement) {
      activeElement.classList.remove('active');
    }
    currentEl.target.classList.add('active');
  }

  private EditTemplate(currentEl) {
    if (currentEl.target.classList.contains('editable')) {
      this.fontSize = currentEl.target.style.fontSize || '16px';
      this.templateName = currentEl.target.innerText || '';
      this.showEditPanel = true;
    } else {
      this.showEditPanel = false;
    }
  }

  private updateTemplate() {
    const templateHtml = this.templateView.nativeElement.querySelector('.template').outerHTML;
    const currentTemplateHTML = templateHtml.replace('active', '');
    const templateForSave = Object.assign({}, this.templateItem);
    templateForSave.template = currentTemplateHTML;
    templateForSave.modified = new Date().getTime();
    this.templateDataService.saveTemplate(templateForSave);
  }
}
