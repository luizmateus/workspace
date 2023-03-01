export interface IChangePasswordRouteBody {
  currentPassword: string;
  newPassword: string;
}

export interface IChangePasswordRouteResponse {
  success: boolean;
  changedPassword: string;
}
