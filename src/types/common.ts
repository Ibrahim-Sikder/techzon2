
import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type userRole = keyof typeof USER_ROLE;

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type UserRole = keyof typeof USER_ROLE;

export interface DrawerItem {
  title: string;
  path: string;
  parentPath?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  child?: DrawerItem[];
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  success: boolean;
  message: string;
  error: any;
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};



export const role = [
  "As BUSINESS OWNER",
  "AS A INVESTOR",
];


import { ReactNode } from "react";

export type TContainer = {
  children: ReactNode;
  className: string;
};
// types.ts

export type TProduct = {
  brand: any;
  _id:string | number ,
  id: number | string;
  name: string;
  image: string;
  price: number;
  discount: number;
  review: number;
  categories: string;
  rating: string;
};


export type TFlashSale = {
  _id: string;
  name: string;
  image: string;
  review: number;
  price: number;
  category: string;
  discount: string;
  flashSale: boolean;
};

export type TProductId = {
  params: {
    productId: string;
    product: any;
  };
};



