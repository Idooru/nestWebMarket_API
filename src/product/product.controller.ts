import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Query,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Json } from './interfaces/json.interface';
import { CreateProductDto } from './dto/create_product.dto';
import { GetProductDto } from './dto/get_product.dto';
import { ModifyProductDto } from './dto/modify_product.dto';
import { AllRouterIdDto } from './dto/all_query_id.dto';

@Controller('products') // 컨트롤러 기능을 해주는 데코레이터
export class ProductController {
  // 의존성 주입이 가능한 ProductService를 삽입해서 ProductService의 기능을 사용가능하게끔 함
  constructor(private productService: ProductService) {}

  // 전체 상품을 불러오는 컨트롤러
  @Get('/')
  getProductAll(): Json {
    return this.productService.getProductAll();
  }

  // 쿼리(상품 이름)를 통해 상품을 불러오는 컨트롤러
  @Get('/qn')
  @UsePipes(ValidationPipe)
  getProductByName(@Query() getProductDto: GetProductDto): Json {
    return this.productService.getProductByName(getProductDto);
  }

  // 쿼리(상품 아이디)를 통해 상품을 불러오는 컨트롤러
  @Get('/qi')
  @UsePipes(ValidationPipe)
  getProductById(@Query() allRouterIdDto: AllRouterIdDto): Json {
    return this.productService.getProductById(allRouterIdDto);
  }

  // 상품을 생성하는 컨트롤러
  @Post('/')
  @UsePipes(ValidationPipe)
  createProduct(@Body() createProductDto: CreateProductDto): Json {
    return this.productService.createProduct(createProductDto);
  }

  // 쿼리(상품 아이디)를 통해 상품을 부분 수정하는 컨트롤러
  @Patch('/qi')
  @UsePipes(ValidationPipe)
  modifyProduct(
    @Query() allRouterIdDto: AllRouterIdDto,
    @Body() modifyProductDto: ModifyProductDto,
  ): Json {
    return this.productService.modifyProduct(allRouterIdDto, modifyProductDto);
  }

  // 쿼리(상품 아이디)를 통해 상품을 삭제하는 컨트롤러
  @Delete('/qi')
  @UsePipes(ValidationPipe)
  removeProduct(@Query() allRouterIdDto: AllRouterIdDto): Json {
    return this.productService.removeProduct(allRouterIdDto);
  }
}
