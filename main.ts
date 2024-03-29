#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';


// CODE STARTS FROM HERE //

let todosObj: [{ title: string, text: string }] = [{
    title: 'Sample Title',
    text: 'Smaple todo'
}];

let getPrompt: string;

async function Ask(main: any) {
    let initialPrompt = await main({
        name: 'mainmenu',
        type: 'list',
        choices: ['ENTER NEW TODO', 'PRINT ALL TODOS', 'QUIT']
    });
    getPrompt = initialPrompt.mainmenu;
};

async function todosFunc() {

    await Ask(inquirer.prompt);

    if (getPrompt === 'ENTER NEW TODO') {

        const addTodo = await inquirer.prompt([
            {
                name: 'title',
                type: 'string',
                message: 'Add Your Todo Title :'
            },
            {
                name: 'todo',
                type: 'string',
                message: 'Add Your Todo Discription :'
            }
        ]);

        todosObj.push({ title: addTodo.title, text: addTodo.todo });

        await setTimeout(() => todosFunc(), 500)

    } else if (getPrompt == 'PRINT ALL TODOS') {
        todosObj.map(objects => { console.log( chalk.red('\n\tTitle: '), chalk.yellow(objects.title), chalk.red('\n\tTodo : '), chalk.yellow(objects.text, '\n') ); })

      await setTimeout(() => todosFunc(), 500);

    } else if (getPrompt === 'QUIT') { console.log(chalk.bgYellow('\n THANKS! FOR USING TODO TYPESCRIPT CODE, STATUS NOW IS QUIT. '));
    }
}

todosFunc()