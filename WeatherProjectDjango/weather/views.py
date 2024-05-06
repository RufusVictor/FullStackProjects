import requests
from django.shortcuts import render

def get_weather(city):
    api_key = '8954fea5ed6ce676bbb784623178e0ce'
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'
    response = requests.get(url)
    data = response.json()
    return data

def weather(request):
    if request.method == 'POST':
        city = request.POST.get('city')
        weather_data = get_weather(city)
        context = {'weather_data': weather_data}
        return render(request, 'weather/weather.html', context)
    else:
        return render(request, 'weather/weather.html')
