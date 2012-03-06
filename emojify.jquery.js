$.fn.emoji = function() {
	return this.each(function(){
		$(this).html(
			var replaceRegex = new RegExp(/([\u0080-\uFFFF]{1,1}[\u0080-\uFFFF])/g);
			$(this).html().replace(replaceRegex, $.fn.emoji.replacer);
		);
	});
};


$.fn.emoji.replacer = function (str, p1) {
	return $.fn.emoji.decimalToHex($.fn.emoji.ord(p1.toString(16))).toString().toLowerCase().replace(
	/^([\da-f]+)$/i,
	'<img src="/images/emoji/$1.png" alt="emoji" />'
	);
}

$.fn.emoji.decimalToHex = function(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

$.fn.emoji.ord = function(string) {
    // Returns the codepoint value of a character  
    // 
    // version: 1109.2015
    // discuss at: http://phpjs.org/functions/ord
    // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   input by: incidence
    // *     example 1: ord('K');
    // *     returns 1: 75
    // *     example 2: ord('\uD800\uDC00'); // surrogate pair to create a single Unicode character
    // *     returns 2: 65536
    var str = string + '',
        code = str.charCodeAt(0);
    if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
        var hi = code;
        if (str.length === 1) {
            return code; // This is just a high surrogate with no following low surrogate, so we return its value;
            // we could also throw an error as it is not a complete character, but someone may want to know
        }
        var low = str.charCodeAt(1);
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
        return code; // This is just a low surrogate with no preceding high surrogate, so we return its value;
        // we could also throw an error as it is not a complete character, but someone may want to know
    }
    return code;
}