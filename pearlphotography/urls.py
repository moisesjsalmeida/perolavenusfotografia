from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings
from pearlphotography import views

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^contato/$', views.contato, name="contato"),
    url(r'^portfolio/$', views.portfolio, name="portfolio"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
