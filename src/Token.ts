import { TokenType } from "./TokenTypes-enum";

type Literal = unknown | null;
export class Token{
   
    constructor(public type:TokenType, public lexeme: string, public literal: Literal, public line: number){}

    public toString(): string{
        return `${this.type} ${this.lexeme} ${this.literal}`
    }
}