<?php
/**
 * Created by PhpStorm.
 * User: gilliantunney
 * Date: 7/9/18
 * Time: 5:49 PM
 */

$function = new Twig_SimpleFunction('aspect_ratio', function ($aspectstr, $maxWidth = 1200, $maxHeight = 3000) {

	$aspectArr = explode(":", $aspectstr);
	$aspect = $aspectArr[1] / $aspectArr[0];

	$dimensions = array(
		"width" => 0,
		"height" => 0
	);
	if ($aspect < 1) {
		$dimensions['width'] = $maxWidth;
		$dimensions['height'] = round($maxWidth * $aspect);
	} elseif ($aspect > 1) {
		$dimensions['width'] = $maxWidth;
		$dimensions['height'] = round($maxWidth * $aspect);
	} elseif ($aspect == 1) {
		$dimensions['width'] = $maxWidth;
		$dimensions['height'] = $maxWidth;
	}
	return $dimensions;
}); ?>