import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeatLayoutPage } from './seat-layout.page';

describe('SeatLayoutPage', () => {
  let component: SeatLayoutPage;
  let fixture: ComponentFixture<SeatLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeatLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
