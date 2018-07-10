<?php
/**
 * Created by PhpStorm.
 * User: gilliantunney
 * Date: 7/9/18
 * Time: 8:55 PM
 */
$function = new Twig_SimpleFunction('images_by_directory', function ($dir = 'public/images/icons/', $image_type = 'svg', $max_results = 2) {

	if ($image_type == 'bitmap') {
		$ext = '*.{jpg,jpeg,png,gif}';
	} elseif ($image_type == 'svg') {
		$ext = '*.{svg}';
	}

	$images = glob($dir . $ext, GLOB_BRACE);

	if (count($images) <= $max_results) {

		//return $images;
	} else {
		$images =  array_slice($images, $max_results);
	}

	for ( $i = 0 ; $i<count($images);$i++){
		$images[$i]=	file_get_contents($images[$i]);
	}
	$filesystemLoader = \PatternLab\Config::getOptions();


//	print_r( $filesystemLoader);
	return $images;
});

?>