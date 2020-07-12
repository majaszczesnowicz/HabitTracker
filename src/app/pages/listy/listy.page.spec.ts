import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListyPage } from './listy.page';

describe('ListyPage', () => {
  let component: ListyPage;
  let fixture: ComponentFixture<ListyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
