import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertEditorComponent } from './expert-editor.component';

describe('ExpertEditorComponent', () => {
  let component: ExpertEditorComponent;
  let fixture: ComponentFixture<ExpertEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
