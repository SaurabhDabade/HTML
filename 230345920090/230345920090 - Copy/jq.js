
<html>
    <head>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    </head>
    <body>
        <label for="input">Enter Text:</label>
        <input type="text" id="input" />

        <label for="format">Select Format:</label>
        <select id="format">
            <option value="B">B</option>
            <option value="I">I</option>
            <option value="U">U</option>
            <option value="BIU">BIU</option>
        </select>

        <p id="output"></p>

        <script>
            $(document).ready(function() {
                $('#format').change(function () {
                    var selectedFormat = $(this).val();
                    var inputText = $('#input').val();

                    if (selectedFormat === 'B') {
                        $('#output').html('<b>' + inputText + '</b>');
                    } else if (selectedFormat === 'I') {
                        $('#output').html('<i>' + inputText + '</i>');
                    } else if (selectedFormat === 'U') {
                        $('#output').html('<u>' + inputText + '</u>');
                    } else if (selectedFormat === 'BIU') {
                        $('#output').html('<b><i><u>' + inputText + '</u></i></b>');
                    } else {
                        $('#output').html('');
                    }
                })
            });
        </script>
    </body>
</html>