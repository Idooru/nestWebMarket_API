// async copyImageFromImagePreparation(
//     creater: string,
//   ): Promise<MediaReturnDto> {
//     const user = await this.userRepository.findUserWithNickName(creater);

//     // 상품 준비 이미지를 가져온다.
//     const imagePreparation = await this.uploadRepository.findImagePreparation();
//     const parseUrl = imagePreparation.url.replace(
//       `http://localhost:${this.configService.get("PORT")}/media/`,
//       "",
//     );
//     const src = path.join(__dirname, `../../../../uploads/image/${parseUrl}`);
//     const dest = path.join(
//       __dirname,
//       `../../../../uploads/image/imagepreparation-${Date.now()}.jpg`,
//     );

//     try {
//       fs.copyFileSync(src, dest);
//     } catch (err) {
//       await this.uploadRepository.deleteProductImageWithId(imagePreparation.id);

//       const errMsg = `서버 디스크에서 ${src.replace(
//         "/root/Coding/nodejs/nest_project/nestWebMarket_API/uploads/image/",
//         "",
//       )}를 찾을 수 없습니다. 상품 준비 이미지를 다시 업로드 하세요.`;
//       throw new NotFoundException(errMsg);
//     }

//     const image = dest.replace(
//       "/root/Coding/nodejs/nest_project/nestWebMarket_API/uploads/image/",
//       "",
//     );

//     return await this.uploadRepository.uploadProductImage({
//       media: image,
//       uploader: user,
//     });
//   }
