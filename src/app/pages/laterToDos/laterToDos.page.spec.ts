import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaterToDosPage } from './laterToDos.page';

describe('LaterToDosPage', () => {
  let component: LaterToDosPage;
  let fixture: ComponentFixture<LaterToDosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaterToDosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaterToDosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
