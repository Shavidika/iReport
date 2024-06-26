from flask import Flask, request, jsonify
import numpy as np
import tensorflow as tf
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load the trained model
model = tf.keras.models.load_model('next_word_prediction_model_news.h5')

# Load the tokenizer
with open('tokenizer_news.json') as f:
    tokenizer_json = f.read()
    tokenizer = tf.keras.preprocessing.text.tokenizer_from_json(tokenizer_json)

max_length = 19

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    input_text = data['input_text']
    for _ in range(1): 
        token_list = tokenizer.texts_to_sequences([input_text])[0]
        token_list = tf.keras.preprocessing.sequence.pad_sequences([token_list], maxlen=max_length-1, padding='pre')
        predicted = np.argmax(model.predict(token_list), axis=-1)
        output_word = ""
        for word, index in tokenizer.word_index.items():
            if index == predicted:
                output_word = word
                break
        input_text += " " + output_word
    return jsonify({'generated_text': input_text})

if __name__ == '__main__':
    app.run(debug=True)
