from django.urls import path
from .views import CalculatorAPIView

urlpatterns=[
    path('',CalculatorAPIView.as_view(),name='calculate'),
]
