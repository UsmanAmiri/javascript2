
// question1
// answer1

function search_all(input_array, search_element)
{
	var found = [];

	for(var i = 0 ; i < input_array.length ; i++)
	{
		if(input_array[i] == search_element) found.push(i);
	}

	if(found.length < 1) return -1;
	else if(found.length == 1) return found[0];
	else return found;
}

console.log(search_all([1, 2, 3, 4, 5, 1, 3], 1))

// question 2
// answer 2
function pattern_1(value)
{
	for(var i = 0 ; i < value ; i++)
	{
		var temp = "";
		for(var j = value ; j > i ; j--)
		{
			temp = temp + j;
		}
		console.log(temp);
	}
}

pattern_1(5);

// question 3
// answer 3

function sort_asscending(array)
{
	array.sort(function(a, b) { return a - b; });
	return array;
}


sort_asscending([3, 2, 1, 4, 5, 45])

// question 4
// answer4
function anagram(str_1, str_2)
{
	if(str_1.length == str_2.length)
	{
		for(var i = 0 ; i < anagram.length ; i++)
		{
			if(!str_2.includes(str_1[i])) return false;
		}

		return true;
	}
	return false;
}

if(anagram("HELLO", "JELLO")) console.log("True");
else console.log("False");

// question 5
// answer 5

function reverse_string(str)
{
	var temp = "";
	for(var i = str.length - 1 ; i >= 0 ; i-- )
	{
		temp = temp + str[i];
	}

	return temp;
}

console.log(reverse_string("Hello"));