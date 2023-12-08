import { MK_GAME, MK_WEB } from '../global/consts';

export interface CustomerDto {
  id: number,
  fio: string,
  city: string,
  school: string,
  class_school: string,
  email: string,
  type_mk: number
}

export interface CustomerModel {
  id: number,
  fio: string,
  city: string,
  school: string,
  class_school: string,
  email: string,
  type_mk: string
}

export function CustomerDtoToModel(customer: CustomerDto): CustomerModel {
  let type_mk = MK_WEB;
  if (customer.type_mk === 2) {
    type_mk = MK_GAME;
  }

  return { ...customer, type_mk: type_mk };
}
