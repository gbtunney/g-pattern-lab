<?php
/**
 * Created by PhpStorm.
 * User: gilliantunney
 * Date: 7/9/18
 * Time: 8:55 PM
 */
$function = new Twig_SimpleFunction('dump_images_by_directory', function ($dir = 'public/images/icons/', $image_type = 'svg', $max_results = 2) {

	if ($image_type == 'bitmap') {
		$ext = '*.{jpg,jpeg,png,gif}';
	} elseif ($image_type == 'svg') {
		$ext = '*.{svg}';
	}

	$images = glob($dir . $ext, GLOB_BRACE);

	//$existing_array = array('a'=>'b', 'b'=>'c');
	//$new_array = array('d'=>'e', 'f'=>'g');

	//array_merge($existing_array, $new_array);
	$arr  = array();

	for ( $i = 0 ; $i<count($images);$i++){

		$new_array = array('key'=>'path');
		$arr = array_merge($arr, $new_array);

	//	$images[$i]=	file_get_contents($images[$i]);
	}
	//file name without extension
	//echo "1) ".basename("/etc/sudoers.d", ".d").PHP_EOL;

	//file name with extension
	//echo "2) ".basename("/etc/sudoers.d").PHP_EOL;

	//parent directory
	//echo dirname("/etc/passwd") . PHP_EOL;

	//$directory = Yii::getPathOfAlias('webroot').'/uploads/';
	//$images = glob($directory . "*.{jpg,JPG,jpeg,JPEG,png,PNG}", GLOB_BRACE);
//	foreach($images as $image)
		//echo basename($image);

	//$arr = array('key' => 'path', 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5); etc

	echo json_encode($arr);

	$filesystemLoader = \PatternLab\Config::getOptions();


//	print_r( $filesystemLoader);
	return $images;
});

?>