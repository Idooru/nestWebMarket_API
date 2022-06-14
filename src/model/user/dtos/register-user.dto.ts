import { PickType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";
import { UserEntity } from "../entities/user.entity";

export class RegisterUserDto extends PickType(UserEntity, [
  "name",
  "nickName",
  "birth",
  "gender",
  "email",
] as const) {
  @IsString({ message: "password : 문자열 형식으로 작성해주세요." })
  @IsNotEmpty({ message: "password : 공백을 남기지 말아주세요." })
  password: string;
}