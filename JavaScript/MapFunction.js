<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Map Function</title>
</head>
<body>

    <h1>Custom JavaScript Map Function</h1>
    <div id="output"></div>

    <script>
        // Custom map function
        function customMap(array, callback) {
            const resultArray = [];
            for (let i = 0; i < array.length; i++) {
                resultArray.push(callback(array[i], i, array));
            }
            return resultArray;
        }

        // Example array
        const numbers = [1, 2, 3, 4, 5];

        // Example usage of customMap
        const doubled = customMap(numbers, function(num) {
            return num * 2;
        });

        // Output the result on the page
        document.getElementById('output').innerText = "Doubled numbers: " + doubled.join(", ");
    </script>

</body>
</html>
