import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLeiloeiroComponent } from './cadastro-leiloeiro.component';

describe('CadastroLeiloeiroComponent', () => {
  let component: CadastroLeiloeiroComponent;
  let fixture: ComponentFixture<CadastroLeiloeiroComponent>;

  beforeEach(async(() => {
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
