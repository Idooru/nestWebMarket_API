import { CookieOptions } from "express";
import { JwtModuleOptions } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

export const CookieOption: CookieOptions = {
  httpOnly: true,
  signed: true,
  expires: new Date(Date.now() + 100000000000),
};

export const JwtOptions: JwtModuleOptions = {
  secret: new ConfigService().get("JWT_SECRET"),
};

export const ReturnPropertyWithSelect = {
  ProductsReturnProperty: [
    "product.name",
    "product.price",
    "product.type",
    "image.url",
    "starRating.averageScore",
  ],
  ProductReturnProperty: [
    "product.id",
    "product.name",
    "product.price",
    "product.origin",
    "product.type",
    "product.description",
    "image.url",
    "starRating.averageScore",
    "product.createdAt",
    "product.updatedAt",
  ],
  ProductReturnWithStarRating: [
    "product.id",
    "product.name",
    "product.price",
    "product.origin",
    "product.type",
    "product.description",
    "image.url",
    "starRating.averageScore",
    "product.createdAt",
    "product.updatedAt",
    "starRating.id",
  ],
  UserInformationReturnProperty: [
    "Profile.realname",
    "Auth.nickname",
    "Profile.birth",
    "Profile.gender",
    "Auth.email",
    "Profile.phonenumber",
    "Auth.userType",
    "Activity.purchaseCount",
    "Activity.bonusPoint",
    "Activity.productInquiryCount",
    "Activity.productReviewCount",
  ],
};
