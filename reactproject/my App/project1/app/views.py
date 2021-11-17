from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from app.serializers import EmployeeSerializer

from app.models import Employee


class EmployeeCURDCBV(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

