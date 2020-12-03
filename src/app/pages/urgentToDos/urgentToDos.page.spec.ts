import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrgentToDosPage } from './urgentToDos.page';

describe('UrgentToDosPage', () => {
  let component: UrgentToDosPage;
  let fixture: ComponentFixture<UrgentToDosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgentToDosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrgentToDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
