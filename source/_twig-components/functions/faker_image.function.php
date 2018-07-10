<?php
/**
 * Created by PhpStorm.
 * User: gilliantunney
 * Date: 7/9/18
 * Time: 5:49 PM
 */

$default_size = 1200;
$function = new Twig_SimpleFunction('FakerImage', function ($width=200,$height=300, $category="cats") {
	$faker = Faker\Factory::create();
	return $faker->imageUrl($width,$height,$category);
}); ?>