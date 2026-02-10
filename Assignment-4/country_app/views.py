from rest_framework import generics
from .models import Country  
from .serializers import CountrySerializer

class CountryListCreateView(generics.ListCreateAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer 

class CountryDetailView(generics.RetrieveUpdateDestroyAPIView):  
    queryset = Country.objects.all()
    serializer_class = CountrySerializer
