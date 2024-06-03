from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()
    
def user_info(request):
    if request.method == 'GET':
        dummy_data = {
            'user_id': 'naufal2303',
            'email': 'naufal2303@my.id',
            'age': 25,
            'role': 'admin',
            'user_name': 'Naufal Widad'
        }
        
        return JsonResponse(dummy_data)
    
    return JsonResponse({
        'error': 'Method not allowed'
    })