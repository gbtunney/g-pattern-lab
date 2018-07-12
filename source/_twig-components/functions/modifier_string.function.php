<?php
/**
 * Created by PhpStorm.
 * User: gilliantunney
 * Date: 7/9/18
 * Time: 8:55 PM
 */
$function = new Twig_SimpleFunction('modifier_string', function ($modifier, $replaceText, $delimeter="^") {
	return str_replace($delimeter, $replaceText ."--", $modifier) ;
});

?>