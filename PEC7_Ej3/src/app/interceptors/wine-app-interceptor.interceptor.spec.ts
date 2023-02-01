import { TestBed } from '@angular/core/testing';

import { WineAppInterceptorInterceptor } from './wine-app-interceptor.interceptor';

describe('WineAppInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      WineAppInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: WineAppInterceptorInterceptor = TestBed.inject(WineAppInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
