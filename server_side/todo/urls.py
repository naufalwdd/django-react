from django.conf import settings
from django.conf.urls.static import static
from django.urls import include, path
from . import views

app_name = 'core'

urlpatterns = [
    path('user-info/', views.user_info, name='user_info')
]