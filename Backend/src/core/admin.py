from django.contrib import admin

from .models import (
     Application, GalleryForm
)


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'short_name', 'tagline', 'is_active', 'created_on')



# @admin.register(GalleryForm)
# class GalleryAdmin(admin.ModelAdmin):
#     list_display = ('image',)
    
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    search_fields = ('name', 'email', 'subject')
    list_filter = ('subject', 'created_at')


