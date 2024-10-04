export function christmasTree(size: number, element: HTMLDivElement) {
    for (let lineIndex = 0; lineIndex < size; lineIndex++) {
        printLine(generateLine(lineIndex, size), element);
    }
    for (let i = 0; i < size; i++) {
        printLine(generateLine(0, size), element);
    }
}

function printLine(line: string, element: HTMLDivElement) {
    const p = document.createElement('p');
    p.textContent = line;
    element.appendChild(p);
}

function generateLine(lineIndex: number, totalLines: number): string {
    const lineWidth: number = 1 + 2 * totalLines;
    const asteriskNumber: number = 1 + 2 * lineIndex
    const whitespaceNumber: number = (lineWidth - asteriskNumber) / 2;
    const line: string = ' '.repeat(whitespaceNumber) + '*'.repeat(asteriskNumber) + ' '.repeat(whitespaceNumber);

    return line;
}