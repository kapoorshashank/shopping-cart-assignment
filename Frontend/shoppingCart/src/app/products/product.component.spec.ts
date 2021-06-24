import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import {ProductComponent} from '../products/product.component';
import { getCategoriesMock, getProductsMock } from '../shared/constant';
import { CommonService } from '../shared/services/common.service';

describe('ProductComponent', () => {
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([]),],
          declarations: [ProductComponent],
          schemas: [NO_ERRORS_SCHEMA],
          providers: [{
            provide: CommonService,
            useValue: jasmine.createSpyObj('CommonService', ['getCategories', 'getProducts'])
          }],
        })
          .compileComponents();
      }));
    
      beforeEach(() => {
        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        const mockService = TestBed.get(CommonService);
        mockService.getCategories.and.returnValue(of(getCategoriesMock));
        mockService.getProducts.and.returnValue(of(getProductsMock));
        fixture.detectChanges();
      });
      it('should create', () => {
        expect(component).toBeTruthy();
      }); 
      it('should display Categories data', () => {
        const fixture = TestBed.createComponent(ProductComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a').textContent).toContain('test');
      });
      it('should have categories details populated ', () => {
        expect(component.categories.length).toBeGreaterThan(0);
      });
      it('should have product details populated ', () => {
        expect(component.products.length).toBeGreaterThan(0);
      });
});
