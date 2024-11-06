function insert(text: string, atArray: string[], atIndex: number) {
    return [...atArray.slice(0, atIndex), text, ...atArray.slice(atIndex)];
}

export { insert };