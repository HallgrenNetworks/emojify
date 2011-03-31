<?php
/*
 * PHP function to change UTF8 strings into emojified strings.
 * 
 * -------------------------------------------------------------
 * File:     emojify.php
 * Name:     emojify
 * Purpose:  Turns a UTF8 string into emoji images
 * -------------------------------------------------------------
 */
function emojify($string) {
    return preg_replace("/([\\xC0-\\xF7]{1,1}[\\x80-\\xBF]+)/e", '_utf8_to_emojiimages("\\1")', $string);
}

function _utf8_to_emojiimages($data) {
    $ret = 0;
    foreach((str_split(strrev(chr((ord($data{0}) % 252 % 248 % 240 % 224 % 192) + 128) . substr($data, 1)))) as $k => $v)
        $ret += (ord($v) % 128) * pow(64, $k);
    return '<img src="/images/emoji/' . dechex((int)$ret) .'.png" alt="emoji" class="emoji" />';
}
?>
