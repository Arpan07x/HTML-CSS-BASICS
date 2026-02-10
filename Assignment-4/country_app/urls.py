from django.urls import path
from .views import CountryListCreateView, CountryDetailView  

urlpatterns = [
    path('countries/', CountryListCreateView.as_view(), name='country-list'),
    path('countries/<int:pk>/', CountryDetailView.as_view(), name='country-detail'),  
]
