import * as fs from "fs";
import * as childProcess from "child_process";

// console.log(fs.readdirSync('./', 'utf-8'));

const folders = fs.readdirSync("./", "utf-8");

let courseContent: string[][] = [];

for(let i = 0; i < folders.length; i++) {
    let directory = './' + folders[i] + '/';
    courseContent.push(fs.readdirSync(directory, 'utf-8'));
}

for(let i = 0; i < folders.length; i++) {
    for(let j = 0; j < courseContent[i].length; j++) {
        let newFilename = courseContent[i][j].replace(':', '-');
        newFilename = newFilename.replace('*', '-');
        newFilename = newFilename.replace('>', '-');
        newFilename = newFilename.replace('<', '-');
        newFilename = newFilename.replace('"', '-');
        newFilename = newFilename.replace('/', '-');
        newFilename = newFilename.replace('\\', '-');
        newFilename = newFilename.replace('|', '-');
        newFilename = newFilename.replace('?', '-');
        newFilename = folders[i] + '/' + newFilename;
        childProcess.execSync(`mv -v "${folders[i] + '/' + courseContent[i][j]}" "${newFilename}"`, {stdio: 'inherit'});
        
    }
}

for(let i = 0; i < folders.length; i++) {
    let newFilename = folders[i].replace(':', '-');
    newFilename = newFilename.replace('*', '-');
    newFilename = newFilename.replace('>', '-');
    newFilename = newFilename.replace('<', '-');
    newFilename = newFilename.replace('"', '-');
    newFilename = newFilename.replace('/', '-');
    newFilename = newFilename.replace('\\', '-');
    newFilename = newFilename.replace('|', '-');
    newFilename = newFilename.replace('?', '-');
    childProcess.execSync(`mv -v "${folders[i]}" "${newFilename}"`, {stdio: 'inherit'});

}