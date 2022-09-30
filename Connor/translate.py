import googletrans
from googletrans import Translator
translator = Translator()
text = "Please wear your life jacket at all times."

result = translator.translate(text, dest="es")

print(result.text)