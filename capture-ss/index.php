<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Capture ScreenShot</title>
</head>

<body>
    <button id="btn_capture">Capture</button>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

    <script>
        jQuery("#btn_capture").click(function() {
            const t = document.body;
            html2canvas(t).then(
                canvas => {
                    document.body.appendChild(canvas);
                }
            );
        });
    </script>
</body>

</html>