export function validate(inp1: string, inp2:string, inp3:string):[boolean, string] {
    const regex1: RegExp = /^[a-zA-Z]{1,5}$/
    console.log(inp1)
    if (!regex1.test(inp1)) {
        return [false, 'input 1 incorrect, type 1-5 letters']
    }
    console.log(inp2)
    const regex2: RegExp = /^\d{3,5}$/
    if (!regex2.test(inp2)) {
        return [false, 'input 2 incorrect, type 3-5 digits']
    }
    console.log(inp3)
    const regex3: RegExp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (!regex3.test(inp3)) {
        return [false, 'input 3 incorrect type email']
    }
    return [true, '']

}