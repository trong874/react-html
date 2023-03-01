export function format_money(n:number, d = 1) {
    let x = ('' + n).length -1, p = Math.pow;
    d = p(10, d);
    x -= x % 3
    return Math.round(n * d / p(10, x)) / d + " kMBTPE"[x / 3]
}


export const numb = function (number: string | number, options = {} ) {
    const config = {
        prefix:'',
        suffix:'',
        thous:'.',
        dec:3,
        ...options,
    }
    const {prefix,suffix,thous,dec} = config;
    let number_only = ('' + number).replace(/\D/g, '');
    let pattern = '(\\d)(?=(';
    for (let i = 0; i < dec; i++) {
        pattern += '\\d';
    }
    pattern += ')+(?!\\d))';
    let regex = new RegExp(pattern, 'g')
    return prefix + number_only.replace(regex, "$1" + thous) + suffix;
};

export const handleCopy = (content:string) => {
    navigator.clipboard.writeText(content)
        .then(() => {
        //coppy xong thì làm gì đó ở đây;
        })
}