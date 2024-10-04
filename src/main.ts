import './style.css'
import { task } from './task.ts'
import { christmasTree } from './christmasTree.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div id="canvas"/>
`
task();
christmasTree(5, document.querySelector<HTMLDivElement>('#canvas')!);
