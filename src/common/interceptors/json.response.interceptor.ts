import {
  CallHandler,
  ArgumentsHost,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class JsonResponseInterceptor implements NestInterceptor {
  intercept(context: ArgumentsHost, next: CallHandler<any>): Observable<any> {
    // controller 도달 전
    const req = context.getArgByIndex(0);
    const res = context.switchToHttp().getResponse();

    console.log(`Request from ${req.method} ${req.originalUrl}`);
    const now = Date.now();

    return next.handle().pipe(
      map((data) => {
        // controller 도달 후
        console.log(
          `Response from ${req.method} ${req.originalUrl} :: time taken : ${
            Date.now() - now
          }ms`,
        );
        res
          .setHeader("X-Powered-By", "")
          .status(data.statusCode)
          .json({ success: true, ...data });
      }),
    );
  }
}