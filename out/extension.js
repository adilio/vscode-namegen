"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function getWord(WordFormat, Editor) {
    const randomWord = require('random-word');
    let newName = "";
    const wordCount = vscode.workspace.getConfiguration('randomNameGen').WordCount;
    console.log("WordFormat: " + WordFormat + ". WordCount: " + wordCount);
    for (let index = 0; index < wordCount; index++) {
        const word = randomWord();
        switch (WordFormat) {
            case 'camelCase': {
                if (index === 0) {
                    newName += word;
                }
                else {
                    newName += word.charAt(0).toUpperCase() + word.substr(1);
                }
                break;
            }
            case 'PascalCase': {
                newName += word.charAt(0).toUpperCase() + word.substr(1);
                break;
            }
            case 'snake_case': {
                if (index === 0) {
                    newName += word;
                }
                else {
                    newName += "_" + word;
                }
                break;
            }
            case 'Kebab-Case': {
                if (index === 0) {
                    newName += word.charAt(0).toUpperCase() + word.substr(1);
                }
                else {
                    newName += "-" + word.charAt(0).toUpperCase() + word.substr(1);
                }
                break;
            }
            case 'crAZyModE': {
                newName += (word).split('').map(function (c) {
                    const chance = Math.round(Math.random());
                    return c = chance ? c.toUpperCase() : c.toLowerCase();
                }).join('');
                break;
            }
            default: {
                newName = "random";
            }
        }
    }
    Editor.edit(edit => {
        edit.insert(Editor.selection.start, newName);
    });
    console.log("Inserted " + newName);
}
function activate(context) {
    console.log('Extension "vscode-namegen" is now active.');
    // The command has been defined in the package.json file
    let disposableCamel = vscode.commands.registerCommand('extension.insertCamel', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            getWord('camelCase', editor);
        }
        else {
            console.log("No active editor, didn't stick anything in");
        }
    });
    context.subscriptions.push(disposableCamel);
    let disposablePascal = vscode.commands.registerCommand('extension.insertPascal', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            getWord('PascalCase', editor);
        }
        else {
            console.log("No active editor, didn't stick anything in");
        }
    });
    context.subscriptions.push(disposablePascal);
    let disposableSnake = vscode.commands.registerCommand('extension.insertSnake', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            getWord('snake_case', editor);
        }
        else {
            console.log("No active editor, didn't stick anything in");
        }
    });
    context.subscriptions.push(disposableSnake);
    let disposableKebab = vscode.commands.registerCommand('extension.insertKebab', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            getWord('Kebab-Case', editor);
        }
        else {
            console.log("No active editor, didn't stick anything in");
        }
    });
    context.subscriptions.push(disposableKebab);
    let disposableCrazy = vscode.commands.registerCommand('extension.insertCrazy', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            getWord('crAZyModE', editor);
        }
        else {
            console.log("No active editor, didn't stick anything in");
        }
    });
    context.subscriptions.push(disposableCrazy);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map