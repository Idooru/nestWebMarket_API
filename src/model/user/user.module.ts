import { ReviewModule } from "./../review/review.module";
import { UserActivityEntity } from "./entities/user.activity.entity";
import { UserAuthEntity } from "./entities/user.auth.entity";
import { UploadService } from "../upload/providers/upload.service";
import { UploadModule } from "./../upload/upload.module";
import { AuthModule } from "./../auth/auth.module";
import { UserRepository } from "../user/providers/user.repository";
import { UserProfileEntity } from "./entities/user.profile.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { forwardRef, Module } from "@nestjs/common";
import { UserController } from "./controllers/user.controller";
import { UserService } from "../user/providers/user.service";
import { UsersEntity } from "./entities/user.entity";
import { FunctionModule } from "../../common/config/etc/function.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersEntity,
      UserProfileEntity,
      UserAuthEntity,
      UserActivityEntity,
    ]),
    forwardRef(() => AuthModule),
    forwardRef(() => UploadModule),
    forwardRef(() => ReviewModule),
    FunctionModule,
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, UploadService],
  exports: [UserService, UserRepository],
})
export class UserModule {}
