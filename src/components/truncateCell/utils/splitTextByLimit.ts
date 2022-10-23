export type splitResultTypes = {
    begin: string,
    tail: string,
}

/**
 * Разделяет строку на 2 части до диста символов с конца и после. 
 * И возвращает объект с двумя частями.
 * Если строка меньше нужного лимита, то ничего не возвращаем пустой хвост
 * @param {String} text - текст, который необходимо 
 * @param {Number} tailLength - колличество символов, которое нужно свять с конца текста
 * @returns {Object} - отдельно начало и конец строки
 */
export const splitTextByLimit = (text: string, tailLength: number): splitResultTypes => {
    const returnable: splitResultTypes = {
        begin: '',
        tail: '',
    };
    if (text && tailLength && text.length > tailLength) {
        returnable.begin = text.slice(0, -tailLength);
        returnable.tail = text.slice(-tailLength);
    } else {
        returnable.begin = text;
    }
    return returnable;
};
