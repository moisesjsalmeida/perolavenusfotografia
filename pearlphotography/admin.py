# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from django import forms
from .models import Photo

# Register your models here.

class PhotoAdmin(admin.ModelAdmin):
    fields = ['path', 'tags', 'thumb',]
    readonly_fields = ['thumb',]
    list_display = ('thumb', 'tags')
    list_filter = ('tags',)

    class Media:
        js = ('/static/js/admin.js',)

admin.site.site_header = 'Painel de controle'
admin.site.register(Photo, PhotoAdmin)
