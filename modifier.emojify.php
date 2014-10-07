<?php
/*
 * Smarty plugin
 * -------------------------------------------------------------
 * File:     modifier.emojify.php
 * Type:     modifier
 * Name:     emojify
 * Purpose:  Turns a UTF8 string into emoji images
 * -------------------------------------------------------------
 */
function smarty_modifier_emojify($string) {
    return preg_replace_callback("/([\\xC0-\\xF7]{1,1}[\\x80-\\xBF]+)/", "_utf8_to_emojiimages", $string);
}

function _utf8_to_emojiimages($data) {
    $data = $matches[0];
    $ret = 0;
    foreach((str_split(strrev(chr((ord($data{0}) % 252 % 248 % 240 % 224 % 192) + 128) . substr($data, 1)))) as $k => $v)
        $ret += (ord($v) % 128) * pow(64, $k);
    return '<img src="/images/emoji/' . dechex((int)$ret) .'.png" alt="emoji" class="emoji" />';
}
?>
