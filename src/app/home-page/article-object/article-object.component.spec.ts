import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleObjectComponent } from './article-object.component';

describe('ArticleObjectComponent', () => {
  let component: ArticleObjectComponent;
  let fixture: ComponentFixture<ArticleObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
