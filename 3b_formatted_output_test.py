from EmotionDetection.emotion_detection import emotion_detector


def test_formatted_output():

    result = emotion_detector("I am glad this happened")

    print("Resultado obtenido:")
    print(result)

    assert isinstance(result, dict)

    assert "anger" in result
    assert "disgust" in result
    assert "fear" in result
    assert "joy" in result
    assert "sadness" in result
    assert "dominant_emotion" in result

    print("\nFormato de salida correcto.")


if __name__ == "__main__":
    test_formatted_output()