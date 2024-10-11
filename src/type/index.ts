import { ReactNode } from "react";

export type TUser = {
  name: string;
  email: string;
  role: string;
};

export type TContainerProps = {
  children: ReactNode;
  className?: string;
};

export type TLoginInputs = {
  email: string;
  password: string;
};

export type TRegisterInputs = {
  name: string;
  email: string;
  password: string;
};

export type Text = {
  text: String;
};

export type TCommentInputs = {
  name: string;
  email: string;
  message: string;
};

export type TContactInputs = {
  name: string;
  email: string;
  message: string;
};

export type TAddSupplyInputs = {
  id: string;
  _id: string;
  imageUrl?: string;
  category: string;
  title: string;
  amount: number;
  description?: string;
};

export type TTestimonialInputs = {
  name: string;
  email: string;
  image: string;
  position: string;
  company: string;
  review: string;
};

export type TDonationInputs = {
  _id: string;
  name: string;
  email: string;
  amount: string;
};

export type TSubscribeInputs = {
  name: string;
  email: string;
};

export type TReliefGoodsType = {
  id: number;
  _id: string;
  image: string;
  title: string;
  category: string;
  amount: string;
  description: string;
};

export type TVolunteerInputs = {
  name: string;
  email: string;
  image: string;
  phone: number;
  location: string;
  occupation:string;
};