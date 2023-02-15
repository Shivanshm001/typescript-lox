export default class LoxError extends Error {
  private err: boolean = false;

  private report(line: number, where:string,message:string):void {
    console.log(`[line ${line}] Error ${where} : ${message}`);
  }

  public error(line: number, message:string):void {
    this.report(line, "", message);
  }
  
  public get hadError(): boolean {
    return this.err;
  }

  public set hadError(e: boolean) {
    this.err = e;
  }
}
