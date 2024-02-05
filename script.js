<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Element Creation</title>
</head>
<body>

<script>
    // Create a div element
    var divElement = document.createElement('div');
    
    // Create a p element
    var pElement = document.createElement('p');
    
    // Create an a element
    var aElement = document.createElement('a');
    
    // Set the href attribute for the a tag
    aElement.href = 'https://example.com';
    
    // Set the text content for the a tag
    aElement.textContent = 'Click me';
    
    // Append the a tag to the p tag
    pElement.appendChild(aElement);
    
    // Append the p tag to the div tag
    divElement.appendChild(pElement);
    
    // Append the div tag to the body of the document
    document.body.appendChild(divElement);
</script>

</body>
</html>
