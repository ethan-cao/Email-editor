"use strict";

import {REMOVE, RECORD} from "../events/NameSpace";
import validateEmail from "../utils/validateEmail";

const Editor = (emails) => {
    // console.log(`Build -- [Editor] -- start`);
    
    const template = `
        <div class=${Editor.EDITOR_CLASS} data-ns="editor">
            ${Editor.innerTemplate(emails)}
        </div>
    `;

    // console.log(`Build -- [Editor] -- end`);

    return template;
};

Editor.EDITOR_CLASS = "form__editor";
Editor.INPUT_CLASS = "form__editor__input";
Editor.EMAIL_CLASS = "form__editor__email";
Editor.REMOVER_CLASS = "form__editor__remover";
Editor.ERROR_CLASS = "form__editor__email--error";

Editor.innerTemplate = (emails) => {
    let key = 0;
    
    return emails.reduce( (accumulator, email) => {
        return accumulator + `
            <div class=${Editor.EMAIL_CLASS} data-key=${key++}> 
                <span class=${validateEmail(email) ? "": Editor.ERROR_CLASS} > ${email} </span>
                <span class=${Editor.REMOVER_CLASS} data-ns=${REMOVE}></span>
            </div>
        `
    }, "") + 
    `<input class=${Editor.INPUT_CLASS} data-ns=${RECORD} type="text" contenteditable="true" placeholder="add more people..."></input>`
};

export default Editor;