import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { CommonService } from 'src/app/shared/services/http.service';
import { getCategoriesMock } from '../../shared/constant';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]),],
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{
        provide: CommonService,
        useValue: jasmine.createSpyObj('CommonService', ['getCategories'])
      }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    const mockService = TestBed.get(CommonService);
    mockService.getCategories.and.returnValue(of(getCategoriesMock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display Categories data', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('test');
  });
  it('should have categories details populated ', () => {
    expect(component.categoryList.length).toBeGreaterThan(0);
  });
});
