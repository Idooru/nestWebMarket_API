import { CommonEntity } from "src/common/entities/common.entity";
import { Entity, JoinColumn, ManyToOne, Column } from "typeorm";
import { InquiryEntity } from "./inquiry.entity";
import { UserEntity } from "src/model/user/entities/user.entity";

@Entity("inquiries_images")
export class InquiryImageEntity extends CommonEntity {
  @Column({ type: "varchar", nullable: false, unique: true })
  url: string;

  @ManyToOne(() => InquiryEntity, (inquiry) => inquiry.Image)
  @JoinColumn({ name: "userId" })
  Inquiry: InquiryEntity;

  @ManyToOne(() => UserEntity, (user) => user)
  @JoinColumn({ name: "uploaderId" })
  uploader: UserEntity;
}
