import requests
def get_wikipedia_page(title):
    url=f"https://en.wikipedia.org/api/rest_v1/page/html/{title}"
    response=requests.get(url)
    if response.status_code==200:
        return response.content.decode("utf-8")
    else:
        return None