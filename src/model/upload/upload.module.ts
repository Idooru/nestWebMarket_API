import { TypeOrmModule } from "@nestjs/typeorm";
import { Module, forwardRef } from "@nestjs/common";
import { UploadService } from "./providers/upload.service";
import { UploadController } from "../upload/controllers/upload.controller";
import { ProductImageEntity } from "./entities/product.image.entity";
import { ReviewImageEntity } from "./entities/review.image.entity";
import { ReviewVideoEntity } from "./entities/review.video.entity";
import { UploadRepository } from "./providers/upload.repository";
import { NestjsFormDataModule } from "nestjs-form-data";
import { UserModule } from "../user/user.module";
import { InquiryImageEntity } from "../inquiry/entities/inquiry.image.entity";
import { InquiryVideoEntity } from "../inquiry/entities/inquiry.video.entity";
import { ProductEntity } from "../product/entities/product.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductEntity,
      ProductImageEntity,
      ReviewImageEntity,
      ReviewVideoEntity,
      InquiryImageEntity,
      InquiryVideoEntity,
    ]),
    forwardRef(() => UserModule),
    NestjsFormDataModule,
  ],
  controllers: [UploadController],
  providers: [UploadService, UploadRepository],
  exports: [UploadService, UploadRepository],
})
export class UploadModule {}
