import { readFileSync } from "fs";
import readline from "readline";
import LoxError from "./Error";
import { Scanner } from "./Scanner";

const loxError = new LoxError();


export default class Lox{

    private static frun(source:string):void {
        console.log(source);
    }

    private static runFile(path: string): void {
        const str = readFileSync(path, {encoding: 'utf-8'});
        this.frun(str)
        if(loxError.hadError) process.exit(65);
    }

    private static runPrompt(){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout 
        });

        rl.setPrompt("> ");
        rl.prompt();
        rl.on('line',(line: string | null) =>{
            if(typeof line !== 'string') return;
            this.frun(line);
            loxError.hadError = false;
            rl.prompt();
        })
    }

    static main(args: string[]): void {
        if(args.length > 1){
            return console.log("Usage: ts-lox [script]");
        }
        else if(args.length == 1) this.runFile(args[0]);
        else this.runPrompt();
    }
};
