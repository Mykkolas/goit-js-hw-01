function getElementWidth(content, padding, border) {
    const contWidth = parseFloat(content);
    const paddWidth = parseFloat(padding);
    const bordWidth = parseFloat(border);

    return contWidth + paddWidth * 2 + bordWidth * 2;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
