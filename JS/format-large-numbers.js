function format_large_number(money_value) {
    // \b (boundary): end of string, comma, dot, space
    let pattern = /(\d+)(\d{3})\b/;
    let string_value = money_value.toString().replace(".", ",");
    while(pattern.test(string_value)) {
        string_value = string_value.replace(pattern, function(match, p1, p2) {
            return p1 + "." + p2
        })
    }
    return string_value
}
