# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Photo(models.Model):
    path = models.ImageField(upload_to="photos/", blank=False)
    tags = models.CharField(max_length=64, blank=False)

    def __str__(self):
        return format(self.path)
    
    def thumb(self):
        from django.utils.html import format_html
        return format_html('<img src="/media/%s" style="max-height:100px" />' % self.path)
    thumb.short_description = 'Preview'
