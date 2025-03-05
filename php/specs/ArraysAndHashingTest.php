<?php
namespace App\Specs;

use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\TestCase;
use App\Src\ArraysAndHashing;

#[CoversClass(ArraysAndHashing::class)]
class ArraysAndHashingTest extends TestCase
{
    private $arrayAndHashing;
    protected function setUp(): void
    {
        $this->arrayAndHashing = new ArraysAndHashing();
    }
    
    public function testTwoSum()
    {
        $this->assertEquals($this->arrayAndHashing->twoSum([2, 7, 11, 15], 9), [0, 1]);
        $this->assertEquals($this->arrayAndHashing->twoSum([3, 2, 4], 6), [1, 2]);
        $this->assertEquals($this->arrayAndHashing->twoSum([3, 3], 6), [0, 1]);
        $this->assertEquals($this->arrayAndHashing->twoSum([2, 7, 11, 15], 10), []);
        $this->assertEquals($this->arrayAndHashing->twoSum([3, 3], 7), []);
    }

    public function testContainsDuplicate()
    {
        $this->assertTrue($this->arrayAndHashing->containsDuplicate([1, 2, 3, 1]));
        $this->assertFalse($this->arrayAndHashing->containsDuplicate([1, 2, 3, 4]));
        $this->assertTrue($this->arrayAndHashing->containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

        $this->assertTrue($this->arrayAndHashing->containsDuplicateAlternative([1, 2, 3, 1]));
        $this->assertFalse($this->arrayAndHashing->containsDuplicateAlternative([1, 2, 3, 4]));
        $this->assertTrue($this->arrayAndHashing->containsDuplicateAlternative([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));

        
    }
}
