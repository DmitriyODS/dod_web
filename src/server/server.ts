import { CustomerDto } from '../models/Customer';
import { Response } from '../models/Response';

export async function GetCustomers(filter_fio: string, is_finished: boolean = false): Promise<Response<any>> {
  return {
    ok: true,
  };
}

export async function GetCustomer(customer_id: number): Promise<Response<any>> {
  return {
    ok: true,
  };
}

export async function SendCustomer(customer: CustomerDto): Promise<Response<any>> {
  return {
    ok: true,
  };
}

export async function GetStatistics(): Promise<Response<any>> {
  return {
    ok: true,
  };
}

export async function GetURLFile(customer_id: number): Promise<Response<any>> {
  return {
    ok: true,
  };
}

export async function SendFinished(customer_id: number): Promise<Response<any>> {
  return {
    ok: true,
  };
}
