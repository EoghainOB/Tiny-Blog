export interface postTypes {
    id: number,
    title: string,
    body: string,
    userId: number,
    tags: string[],
    reactions: number,
}

export interface filterTypes {
    value: string,
}