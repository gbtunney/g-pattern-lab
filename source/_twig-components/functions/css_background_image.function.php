<?php
/**
 * Created by PhpStorm.
 * User: gilliantunney
 * Date: 7/12/18
 * Time: 3:57 PM
 */
$function = new Twig_SimpleFunction('css_background_image', function ($path = 'public/images/icons/icon-flame.svg',$color= 'red') {

	return 'style="background-image:url(' . $path .');"';
});
