enum TokenType {
  //Single character tokens
  LEFT_PAREN = "LEFT_PAREN",
  RIGHT_PAREN = "RIGHT_PAREN",
  LEFT_BRACE = "LEFT_BRACE",
  RIGHT_BRACE = "RIGHT_BRACE",
  COMMA = "COMMA",
  DOT = "DOT",
  MINUS = "MINUS",
  PLUS = "PLUS",
  SEMICOLON = "SEMICOLON",
  SLASH = "SLASH",
  STAR = "STAR",

  //One or two character tokens
  BANG = "BANG",
  BANG_EQUAL = "BANG_EQUAL",
  EQUAL = "EQUAL",
  EQUAL_EQUAL = "EQUAL_EQUAL",
  GREATER = "GREATER",
  GREATER_EQUAL = "GREATER_EQUAL",
  LESS = "LESS",
  LESS_EQUAL = "LESS_EQUAL",
  // QOUTE = "QOUTE",
  // DOUBLE_QOUTE = "DOUBLE_QOUTE",

  //Character literals
  IDENTIFIER = "IDENTIFIER",
  STRING = "STRING",
  NUMBER = "NUMBER",

  //Keywords
  AND = "AND",
  CLASS = "CLASS",
  ELSE = "ELSE",
  FALSE = "FALSE",
  FUNC = "FUNC",
  FOR = "FOR",
  IF = "IF",
  NIL = "NIL",
  OR = "OR",
  PRINT = "PRINT",
  RETURN = "RETURN",
  SUPER = "SUPER",
  THIS = "THIS",
  TRUE = "TRUE",
  DECLARE = "DECLARE",
  WHILE = "WHILE",

  EOF = "EOF",
}

//TokenType ends

enum TokenPair {
  LEFT_PAREN = "(",
  RIGHT_PAREN = ")",
  LEFT_BRACE = "{",
  RIGHT_BRACE = "}",
  COMMA = ",",
  DOT = ".",
  MINUS = "-",
  PLUS = "+",
  SEMICOLON = ";",
  SLASH = "/",
  STAR = "*",

  //One or two character tokens
  BANG = "!",
  BANG_EQUAL = "!=",
  EQUAL = "=",
  EQUAL_EQUAL = "==",
  GREATER = ">",
  GREATER_EQUAL = ">=",
  LESS = "<",
  LESS_EQUAL = "<=",
  QOUTE = "'",
  DOUBLE_QOUTE = '"',
  NEW_LINE = "\n",
  WHITE_SPACE = " ",
  TAB = "\t",
  CARRIAGE = "\r",
  //Keywords
  AND = "and",
  OR = "or",
  IF = "if",
  ELSE = "else",
  ELSE_IF = "else_if",

  TRUE = "true",
  FALSE = "false",

  THIS = "this",
  SUPER = "super",
  CLASS = "class",
  FUNC = "func",

  FOR = "for",
  NIL = "nil",
  PRINT = "print",
  RETURN = "return",
  DECLARE = "declare",
  WHILE = "while",

  EOF = "EOF",
}
export { TokenType, TokenPair };
