from django.contrib import admin
from django.conf.urls import include
from django.urls import path
from rest_framework import routers

from .views import UserViewSet

router = routers.DefaultRouter()
router.register('user', UserViewSet)

urlpatterns = [

    path('', include(router.urls)),
]
