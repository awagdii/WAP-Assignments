<html>
<head>
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="http://code.jquery.com/jquery-3.4.0.min.js"></script>

    <script>
        window.onload = function () {

            var searchBtn = $("#searchBtn");

            searchBtn.click(function () {
                var inputValue = $("#lookupInput").val();
                console.log(inputValue);
                $.ajax({
                    url: "search",
                    type: 'GET',
                    data: {"searchString": inputValue},
                    success: function (data) {
                        $('#result').html(data);
                    }

                });
            });


        }


    </script>
</head>
<body>
<h2>WAP Dictionary Project</h2>

<div class="search-form">
    <input type="text" id="lookupInput" value="word" class="search-form__input">
    <button id="searchBtn" class="search-form__btn">Search</button>
</div>


<div id="result"></div>


<br>
</body>
</html>
