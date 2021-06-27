function list(names) {
    if (arr.length > 1) {
        const others = arr.splice(0, arr.length - 2).map(p => p.name).join(', ');
        const last = arr[arr.length - 1].name;
        return `${others} & ${last}`;
    } else if (arr.length === 1) {
        return arr[0].name;
    } else {
        return '';
    }
}