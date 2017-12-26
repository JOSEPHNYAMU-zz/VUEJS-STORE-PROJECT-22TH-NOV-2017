<?php

use Faker\Generator as Faker;

$factory->define(App\Item::class, function (Faker $faker) {
    return [
        'title' => $faker->word,
        'description' => $faker->paragraph(random_int(1, 1)),
        'price' => $faker->randomFloat(2, 1000, 1000000),
        'image' => $faker->image()
    ];
});
