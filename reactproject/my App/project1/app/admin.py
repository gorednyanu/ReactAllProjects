from django.contrib import admin
from app.models import Employee


# Register your models here.

class EmployeeAdmin(admin.ModelAdmin):
    list_display = ['name', 'username', 'email']


admin.site.register(Employee, EmployeeAdmin)
