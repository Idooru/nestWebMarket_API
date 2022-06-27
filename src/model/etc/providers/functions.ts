import { Injectable } from "@nestjs/common";
import { InternalServerErrorException } from "@nestjs/common";

@Injectable()
export class Functions {
  promiseSettledProcess(
    promiseArray: Array<PromiseSettledResult<any>>,
    msg: string,
  ) {
    const errors = promiseArray.filter(
      (idx: PromiseSettledResult<unknown>): idx is PromiseRejectedResult =>
        idx.status === "rejected",
    );

    if (errors.length) {
      throw new InternalServerErrorException(errors, msg + " Error");
    }

    const successes = promiseArray.filter(
      <T>(idx: PromiseSettledResult<T>): idx is PromiseFulfilledResult<T> =>
        idx.status === "fulfilled",
    );

    return successes;
  }
}