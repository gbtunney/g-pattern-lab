<?php
/**
 * Created by PhpStorm.
 * User: gilliantunney
 * Date: 7/9/18
 * Time: 5:49 PM
 */

$default_size = 1200;
$function = new Twig_SimpleFunction('Faker', function ($formatter) {

	$faker = Faker\Factory::create();

	return $faker->$formatter;
}); ?>