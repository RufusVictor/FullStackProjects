from django.shortcuts import render
from .utils import get_wikipedia_page

def search(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        page_content = get_wikipedia_page(title)
        if page_content:
            return render(request, 'wikipedia/page.html', {'page_content': page_content})
        else:
            return render(request, 'wikipedia/error.html', {'error_message': 'Page not found'})
    return render(request, 'wikipedia/search.html')
