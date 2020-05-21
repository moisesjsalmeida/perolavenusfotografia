from django import forms

class ContactForm(forms.Form):
    nome = forms.CharField(label='', max_length=100, widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Nome'}))
    email = forms.EmailField(label='', widget=forms.EmailInput(attrs={'class':'form-control', 'placeholder':'E-mail'}))
    phone = forms.CharField(label='', max_length=15, widget=forms.TextInput(attrs={'class':'form-control','placeholder':'Telefone'}))
    message = forms.CharField(label='', widget=forms.Textarea(attrs={'class':'form-control message', 'rows':'3', 'placeholder':'Mensagem'}))