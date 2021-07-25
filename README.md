# Characters
.  => Matches any single character except new lines: \n, \r. For example, /.y/ matches "my" and "ay", but not "yes", in "yes make my day".
\d => Matches any digit. Equivalent to [0-9]. For example, /\d/ or /[0-9]/ matches "2" in "B2 is the suite number".
\D => Matches any character that is not a digit. Equivalent to [^0-9]. For example, /\D/ or /[^0-9]/ matches "B" in "B2 is the suite number".
\w => Matches any alphanumeric character, including the underscore. Equivalent to [A-Za-z0-9_]. For example, /\w/ matches "a" in "apple", "5" in "5.2".
\W => Matches any character that is not a word character. Equivalent to [^A-Za-z0-9_]. For example, /\W/ or /[^A-Za-z0-9_]/ matches "%" in "50%".
\s => Matches a single white space character, including space, tab and other Unicode spaces. For example, /\s\w*/ matches " bar" in "foo bar".
\S => Matches a single character other than white space. For example, /\S\w*/ matches "foo" in "foo bar".

# Assertions
^  => Matches the beginning of input. For example, /^A/ does not match the "A" in "an A", but does match the first "A" in "An A".
$  => Matches the end of input. For example, /t$/ does not match the "t" in "eater", but does match it in "eat".

# Groups and ranges
x|y => Matches either "x" or "y". For example, /green|red/ matches "green" in "green apple" and "red" in "red apple".
[abc] => Matches any one of the enclosed characters. Equivalent to [a-c].
[^abc] => Matches anything that is not enclosed in the brackets. Equivalent to [^a-c].


# Quantifiers
x*     => Matches the preceding item "x" 0 or more times. For example, /bo*/ matches "booo" in "A ghost boooed" and "b" in "A bird warbled".
x+     => Matches the preceding item "x" 1 or more times. Equivalent to {1,}. For example, /a+/ matches the "a" in "candy" and all the "a" in "caaandy".
x?     => Matches the preceding item "x" 0 or 1 times. For example, /e?le?/ matches the "el" in "angel" and the "le" in "angle."
x{n}   => Matches the preceding item "x" "n" times. For example, /a{2}/ doesn't match the "a" in "candy", but it matches all of the "a"'s in "caandy".
x{n,m} => Matches the preceding item "x" from "n" to "m" times. For example, /a{1,3}/ matches none in "cndy" and the first three "a"'s in "caaaaaandy".