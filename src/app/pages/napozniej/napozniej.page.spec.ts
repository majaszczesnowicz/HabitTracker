import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NapozniejPage } from './napozniej.page';

describe('NapozniejPage', () => {
  let component: NapozniejPage;
  let fixture: ComponentFixture<NapozniejPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NapozniejPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NapozniejPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
