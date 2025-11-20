export default class AppError extends Error {
  protected static readonly _DEFAULT_ERROR_MSG = "Unknown error";
  protected static readonly _DEFAULT_ERROR_CODE = 0;

  readonly code: number;
  readonly original?: unknown;

  constructor(
    message: string,
    code = AppError._DEFAULT_ERROR_CODE,
    original?: unknown
  ) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.original = original;
  }

  static from(err: unknown, code = AppError._DEFAULT_ERROR_CODE): AppError {
    if (AppError.is(err)) {
      return err.code !== code
        ? new AppError(err.message, code, err.original)
        : err;
    }

    if (err instanceof Error) {
      return new AppError(err.message, code, err);
    }
    if (typeof err === "string") {
      return new AppError(err, code);
    }
    return new AppError(AppError._DEFAULT_ERROR_MSG, code, err);
  }

  static is(e: unknown): e is AppError {
    return e instanceof AppError;
  }

  static throwIfInstance(e: unknown) {
    if (AppError.is(e)) {
      throw e;
    }
  }

  [Symbol.toPrimitive](hint: string): string | number {
    switch (hint) {
      case "number":
        return this.code;

      default:
        return this.message;
    }
  }
}
