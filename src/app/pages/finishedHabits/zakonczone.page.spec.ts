import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinishedHabitsPage } from './finishedHabits.page';

describe('FinishedHabitsPage', () => {
  let component: FinishedHabitsPage;
  let fixture: ComponentFixture<FinishedHabitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishedHabitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinishedHabitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
