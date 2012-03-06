Welcome to emojify
Thie will allow you to place iOS, iPhone, iPad, and iPod emoji icons on your web site so all users can see
in every browser and every platform. No more square boxes

If you've gotten this far in your quest to enable emoji support you've come to the right place. @webguyatwork and @challgren have reverse engineered
the new iOS5 emoji and created a method to replace them in your web site. We've included 4 way to accomplish this task but you must first follow a couple steps.


1: Upload the folder /emoji to /images/emoji on your server or change the url in emojify.php, emojify.js, emojify.jquery.js, and modifier.emojify.php
2: Pick your path of deployment: Smarty, PHP, jQuery, or JavaScript.
3: The code base is pretty simple to run. I believe all calls are emojify($string);
4: Sit back and relax because it didn't take you 8 14 hour days to figure it out.

If you use Smarty template engine you still need to upload the image directory. But just upload modifier.emojify.php to your plugin directory and simply use {$string|emojify}

If your not sure what your plugin directory is read the following doc please http://www.smarty.net/docsv2/en/variable.plugins.dir.tpl

NOTE: All Strings sent to the emojify command must be utf8mb4 to support iOS5 emoji.
If your database in in utf8_general_ci and you switch to utf8mb4_general_ci, you will break pre iOS5 icons already stored, but new ones will be stored in the correct format.

If your storing the data in a database make sure you collation is set to utf8mb4_general_ci to support iOS5 emoji that are Unicode 6.1. This support is only in mySQL 5.5 and above.

*** Known Issues ***
Due to a change with iOS5 flags are not support just yet.
The RegEx for the javascript is a little to open on its range once I reverse engineer the pattern I'll update the git repo