<?php
/**
 * Created by PhpStorm.
 * User: gilliantunney
 * Date: 7/9/18
 * Time: 8:55 PM
 */
$function = new Twig_SimpleFunction('inline_svg', function ($path = 'public/images/icons/icon-flame.svg', $image_type = 'svg', $max_results = 2) {

	if ($image_type == 'bitmap') {
		$ext = '*.{jpg,jpeg,png,gif}';
	} elseif ($image_type == 'svg') {
		$ext = '*.{svg}';
	}

	$images = glob($dir . $ext, GLOB_BRACE);
	$filesystemLoader = \PatternLab\Config::getOptions();
	//print_r($filesystemLoader);
	//echo "excists" . file_exists($path);
	if (file_exists($path)){
		return file_get_contents($path);

	}else{
		echo "not found";
	}



});

?>