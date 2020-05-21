// Animation on scroll
const animatedItems = document.querySelectorAll(".animated");

const appearOptions = {
    rootMargin: "-100px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

animatedItems.forEach(item => appearOnScroll.observe(item));

// Formulário de contato
let name = document.getElementById('id_nome');
let email = document.getElementById('id_email');
let phone = document.getElementById('id_phone');
let message = document.getElementById('id_message');
let form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let dadoscontato = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
        csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value
    };

    fetch('/contato/', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                "X-CSRFToken": getCookie("csrftoken"),
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadoscontato),
        })
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (response) {
            alert('Mensagem enviada com sucesso!');
        });
});

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

const csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function (xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

// Phone Mask
document.querySelector('#id_phone').addEventListener("input", (e) => {
    e.target.value = mascara(e.target.value)
});

function mascara(numero) {
    return numero
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1');
};