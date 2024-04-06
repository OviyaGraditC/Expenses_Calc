import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveParticipantComponent } from './remove-participant.component';

describe('RemoveParticipantComponent', () => {
  let component: RemoveParticipantComponent;
  let fixture: ComponentFixture<RemoveParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveParticipantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
