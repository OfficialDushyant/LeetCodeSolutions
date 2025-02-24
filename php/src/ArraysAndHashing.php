<?php
namespace App\Src;

class ArraysAndHashing
{
    public function twoSum(array $nums, int $target): array
    {
        $map = [];
        foreach ($nums as $index => $num) {
            $complete = $target - $num;

            if (isset($map[$complete])) {
                return [$map[$complete], $index];
            }

            $map[$num] = $index;
        }

        return [];
    }
}
