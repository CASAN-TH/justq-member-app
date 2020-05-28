import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QueueTicketComponent } from './queue-ticket.component';

describe('QueueTicketComponent', () => {
  let component: QueueTicketComponent;
  let fixture: ComponentFixture<QueueTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueTicketComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QueueTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
