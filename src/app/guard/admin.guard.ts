import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const role:any = localStorage.getItem('role')
  if(!role) {
    alert('Bạn cần đăng nhập để truy cập trang admin!')
    return false
  } else if(role == 1){
    return true;
  }else{
    alert('Bạn không có quyền truy cập trang này!')
    window.location.href = 'http://localhost:4200/'
    return false
  }
};
