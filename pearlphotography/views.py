# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.urls import reverse

# Create your views here.
import json
from django.http import HttpResponse, JsonResponse
from django.core.mail import send_mail
from django.contrib import messages

from .forms import ContactForm
from .models import Photo
# Create your views here.

def index(request):
    form = ContactForm(request.POST)
    return render(request, "pearlphotography/index.html", {'form':form})

def contato(request):
    if request.method == 'POST':
        r = request.body.decode('utf-8')
        requestbody = json.loads(r)
        name = requestbody['name']
        email = requestbody['email']
        phone = requestbody['phone']
        message = requestbody['message']
        newmessage = "Mensagem recebida de {}.\nTelefone: {}\ne-mail {}\n{}".format(name, phone, email, message)
        send_mail(
            'Nova mensagem pelo site',
            newmessage,
            '<siteemailadress>',
            ['<adminemailadress>'],
            fail_silently=False
        )
        send_mail(
            'Recebemos sua mensagem!',
            'Olá, {}!\nRecebemos sua mensagem e entraremos em contato em breve.\nVocê também pode nos contatar pelo Whatsapp (28) 99948-5111.\nObrigado pela preferência!'.format(name),
            '<siteemailadress>',
            [email],
            fail_silently=False
        )
        return HttpResponse(request)


def portfolio(request):
    pictures = list(Photo.objects.values_list('path', flat="True"))
    photos = json.dumps(pictures)
    return render(request, "pearlphotography/portfolio.html", {'photos':photos})