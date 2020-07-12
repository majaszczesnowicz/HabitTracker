import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ZakonczonePage } from './zakonczone.page';

describe('ZakonczonePage', () => {
  let component: ZakonczonePage;
  let fixture: ComponentFixture<ZakonczonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZakonczonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ZakonczonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
