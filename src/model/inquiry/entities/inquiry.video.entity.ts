import { CommonEntity } from "src/common/entities/common.entity";
import { Entity, JoinColumn, ManyToOne, Column } from "typeorm";
import { InquiriesEntity } from "./inquiry.entity";
import { UsersEntity } from "src/model/user/entities/user.entity";

@Entity("inquiries_videos")
export class InquiriesVideoEntity extends CommonEntity {
  @Column({ type: "varchar", nullable: false, unique: true })
  url: string;

  @ManyToOne(() => InquiriesEntity, (inquiry) => inquiry.Image)
  @JoinColumn({ name: "inquiryId" })
  Inquiry: InquiriesEntity;

  @ManyToOne(() => UsersEntity, (user) => user)
  @JoinColumn({ name: "userId" })
  uploader: UsersEntity;
}