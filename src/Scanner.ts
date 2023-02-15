import { Token } from "./Token";
import { TokenType, TokenPair } from "./TokenTypes-enum";
import LoxError from "./Error";
import RESERVED_WORDS from './Reserved-words';
RESERVED_WORDS
const errorHandler = new LoxError();

export class Scanner {
  private tokens: Token[] = [];
  private current: number = 0;
  private start: number = 0;
  private line: number = 1;

  constructor(private source: string) {
    this.convertToToken();
  }

  private convertToToken(): void {
    const length = this.source.length;
    while (this.current <= length) {
      this.start = this.current;
      this.scanToken();
    }

    const eof = new Token(TokenType.EOF, "", null, this.line);
    this.tokens = [...this.tokens, eof];
  }

  private scanToken(): void {
    let current: string = this.advance();

    //For single characters like '(', ')', ',' etc.

    switch (current) {
      case TokenPair.LEFT_PAREN:
        this.addToken(TokenType.LEFT_PAREN, null);
        break;

      case TokenPair.RIGHT_PAREN:
        this.addToken(TokenType.RIGHT_PAREN, null);
        break;

      case TokenPair.LEFT_BRACE:
        this.addToken(TokenType.LEFT_BRACE, null);
        break;

      case TokenPair.RIGHT_BRACE:
        this.addToken(TokenType.RIGHT_BRACE, null);
        break;

      case TokenPair.COMMA:
        this.addToken(TokenType.COMMA, null);
        break;

      case TokenPair.DOT:
        this.addToken(TokenType.DOT, null);
        break;

      case TokenPair.MINUS:
        this.addToken(TokenType.MINUS, null);
        break;

      case TokenPair.PLUS:
        this.addToken(TokenType.PLUS, null);
        break;

      case TokenPair.SEMICOLON:
        this.addToken(TokenType.SEMICOLON, null);
        break;

      case TokenPair.STAR:
        this.addToken(TokenType.STAR, null);
        break;

      //Single or Double character tokens like '! or !=', '< or <=', '> or >=' etc.

      case TokenPair.BANG: {
        const token = this.match(TokenPair.EQUAL)
          ? TokenType.BANG_EQUAL
          : TokenType.BANG;
        this.addToken(token, null);
        break;
      }

      case TokenPair.EQUAL: {
        const token = this.match(TokenPair.EQUAL)
          ? TokenType.EQUAL_EQUAL
          : TokenType.EQUAL;
        this.addToken(token, null);
        break;
      }

      case TokenPair.LESS: {
        const token = this.match(TokenPair.EQUAL)
          ? TokenType.LESS_EQUAL
          : TokenType.LESS;
        this.addToken(token, null);
        break;
      }

      case TokenPair.GREATER: {
        const token = this.match(TokenPair.EQUAL)
          ? TokenType.GREATER_EQUAL
          : TokenType.GREATER;
        this.addToken(token, null);
        break;
      }

      //Special case for '/' because it is used both for comments and division operators.
      case TokenPair.SLASH: {
        if (this.match("/")) {
          while (this.peek() !== TokenPair.NEW_LINE && !this.isAtEnd()) {
            this.advance();
          }
        } else {
          this.addToken(TokenType.SLASH, null);
        }
      }

      //String literals
      case TokenPair.DOUBLE_QOUTE:
        this.string();
        break;
      //Tokens like newline or whitespace which should be ignored.
      case TokenPair.WHITE_SPACE:
      case TokenPair.NEW_LINE:
      case TokenPair.CARRIAGE:
        break;

      default:
        //Handling numbers
        if (this.isDigit(current)) this.number();
        else if (this.isAlpha(current)) this.identifier();
        else errorHandler.error(this.line, "Unexpected Character!");
        break;
    }
  }

  //Helper function
  //Weather we have consumed all the tokens or not
  private isAtEnd(): boolean {
    return this.current >= this.source.length ? true : false;
  }

  //Helper function
  //Consumes the next character in the source file and returns it, it's for input.
  private advance(): string {
    this.current = this.current + 1;
    return this.source[this.current - 1];
  }

  //Helper function
  private addToken(type: TokenType, literal: unknown | null): void {
    let token = new Token(type, this.lexeme, literal, this.line);
    this.tokens = [...this.tokens, token];
  }

  //Helper fuction
  //Check if the current token is an identifier or not
  private identifier(): void {
    while (this.isAlphaNumeric(this.peek())) this.advance();

    this.addToken(TokenType.IDENTIFIER, null);
  }

  //Helper fuction
  //Check if current token is an alphabet
  private isAlpha(c: string): boolean {
    return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || c == "_";
  }

  private isAlphaNumeric(c: string): boolean {
    return this.isAlpha(c) || this.isDigit(c);
  }

  //Check if passed character is digit (number) or not
  private isDigit(c: string): boolean {
    return c >= "0" && c <= "9";
  }

  private number() {
    while (this.isDigit(this.peek())) this.advance();
    if (this.peek() == "." && this.isDigit(this.nextPeek())) {
      this.advance();
      while (this.isDigit(this.peek())) this.advance();
    }

    this.addToken(TokenType.NUMBER, parseInt(this.lexeme, 10));
  }

  //Helper fuction next peek
  private nextPeek(): string {
    if (this.current + 1 == this.source.length) return "\0";
    else return this.source.charAt(this.current + 1);
  }

  //Helper function
  private match(expected: string): boolean {
    if (this.isAtEnd()) return false;
    if (this.source.charAt(this.current) !== expected) return false;

    this.current++;
    return true;
  }

  //Helper function
  private peek(): string {
    if (this.isAtEnd()) return "\0";
    return this.source.charAt(this.current);
  }

  //Helper function
  private string(): void {
    while (this.peek() !== TokenPair.DOUBLE_QOUTE && !this.isAtEnd()) {
      if (this.peek() == TokenPair.NEW_LINE) {
        this.line++;
      }
      this.advance();
    }

    if (this.isAtEnd()) {
      errorHandler.error(this.line, "Unterminated string.");
      return;
    }
    this.advance();

    let value: string = this.source.substring(this.start + 1, this.current - 1);
    this.addToken(TokenType.STRING, value);
  }

  //Getters and Setters
  private get lexeme(): string {
    return this.source.substring(this.start, this.current);
  }
}
