import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { AuthService } from '../auth.service';
import { UserRole } from '../model/roles';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  userDataSubscription: any;
  userData = new User();
  constructor(private router: Router, private authService: AuthService){
    this.userDataSubscription = this.authService.userData.asObservable().subscribe(data => {
      this.userData = data;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.userData.role === UserRole.Admin){
      return true;
    }

    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}}) ;
    return false; 
  }
  
}
