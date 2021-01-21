import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CadastroLeiloeiroComponent } from './cadastro-leiloeiro.component';

describe('CadastroLeiloeiroComponent', () => {
  let component: CadastroLeiloeiroComponent;
  let fixture: ComponentFixture<CadastroLeiloeiroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroLeiloeiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroLeiloeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
