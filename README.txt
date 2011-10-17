Welcome to php-emojify

To setup use the following example


Create a php file called index.php

<?php
include("emojify.php");

echo emojify("String in UTF8 format with emoji characters");
?>

Upload /emoji to /images/emoji on your server or change the url in emojify.php or modifier.emojify.php 


If you use Smarty template engine you still need to upload the image directory. But just upload modifier.emojify.php to your plugin directory and simply use {$string|emojify}


If your not sure what your plugin directory is read the following doc please http://www.smarty.net/docsv2/en/variable.plugins.dir.tpl

NOTE: All Strings sent to the emojify command must be utf8mb4 to support iOS5 emoji

If your storing the data in a database make sure you collation is set to utf8mb4_general_ci to support iOS5 emoji that are Unicode 6.0

*** Known Issues ***
Due to a change with iOS5 flags are not support just yet.