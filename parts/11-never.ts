function throwError(message: string, code: number): never {
  throw {
    message: message,
    code: code,
  };
}

console.log(throwError("error", 500));
