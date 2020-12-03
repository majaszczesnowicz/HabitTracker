import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoneToDosPage } from './doneToDos.page';

describe('DoneToDosPage', () => {
  let component: DoneToDosPage;
  let fixture: ComponentFixture<DoneToDosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneToDosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoneToDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
