from django.urls import path
from . import views

urlpatterns = [
    path('', views.categories_list),
]