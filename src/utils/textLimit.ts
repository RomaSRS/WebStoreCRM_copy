export const TextLimit = (text: string , count: number) => {
    const words = text.split(" ");
    let charCount = 3;
    if (text.length >= count) {
        return (
        words
            .map((word) => {
                charCount += word.length + 1;
                if (charCount <= count) {
                    return word;
                }
                return "";
                })
                .join(" ") + " ..."
        );
    }
    return text;
};