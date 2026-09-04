function runEmotionDetection() {

    const text =
        document.getElementById(
            "textToAnalyze"
        ).value;

    const responseElement =
        document.getElementById(
            "system_response"
        );

    if (!text.trim()) {

        responseElement.innerHTML =
            "Invalid text! Please try again!";

        return;
    }

    fetch(
        "/emotionDetector?textToAnalyze="
        + encodeURIComponent(text)
    )
        .then(response => response.text())
        .then(data => {

            responseElement.innerHTML =
                "<pre>" + data + "</pre>";

        })
        .catch(error => {

            responseElement.innerHTML =
                "Error connecting to server.";

        });
}