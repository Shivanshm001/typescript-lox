import { TokenType ,TokenPair as TP } from "./TokenTypes-enum"

type RESERVED_WORDS = {
    [key: string] : TokenType
}
const reserved_words: RESERVED_WORDS= {
    [TP.AND] : TokenType.AND,
    [TP.CLASS] : TokenType.CLASS,
    [TP.DECLARE] : TokenType.DECLARE,
    [TP.ELSE] : TokenType.ELSE,
    [TP.FALSE] : TokenType.FALSE,
    [TP.FOR] : TokenType.FOR,
    [TP.FUNC] : TokenType.FUNC,
    [TP.IF] : TokenType.IF,
    [TP.NIL] : TokenType.NIL,
    [TP.OR] : TokenType.OR,
    [TP.PRINT] : TokenType.PRINT,
    [TP.RETURN] : TokenType.RETURN,
    [TP.SUPER] : TokenType.SUPER,
    [TP.THIS] : TokenType.THIS,
    [TP.TRUE] : TokenType.TRUE,
    [TP.WHILE] : TokenType.WHILE

}

export default reserved_words;