document.addEventListener('DOMContentLoaded', function() {
    // Tab geçişlerini yönet
    $('.tab a').on('click', function(e) {
        e.preventDefault();

        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');

        const target = $(this).attr('href');

        $('.tab-content > div').not(target).hide();

        $(target).fadeIn(600);
    });

    // Form etkileşimlerini yönet
    $('.form').find('input, textarea').on('keyup blur focus', function(e) {
        const $this = $(this);
        const label = $this.prev('label');

        if (e.type === 'keyup') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.removeClass('highlight');
            }
        } else if (e.type === 'focus') {
            if ($this.val() === '') {
                label.removeClass('highlight');
            } else {
                label.addClass('highlight');
            }
        }
    });

    // Sign Up formunu ve Log In formunu seç
    const signUpForm = document.querySelector('#signup form');
    const loginForm = document.querySelector('#login form');
    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';

    // Sign Up formunun submit olayını dinle
    signUpForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Formun varsayılan gönderimini engelle

        // Form alanlarını al
        const firstName = signUpForm.querySelector('input[type="text"]').value.trim();
        const lastName = signUpForm.querySelector('input[type="text"]').nextElementSibling.value.trim();
        const email = signUpForm.querySelector('input[type="email"]').value.trim();
        const password = signUpForm.querySelector('input[type="password"]').value.trim();

        // Hata mesajını temizle
        if (errorMessage.parentElement) {
            errorMessage.remove();
        }

        // Alanları kontrol et
        if (firstName === '' || lastName === '' || email === '' || password === '') {
            showError('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            showError('Please enter a valid email address.');
        } else {
            alert('Sign Up successful!');
            // Formu gönder veya diğer işlemleri yap
            signUpForm.reset();
        }
    });

    // Log In formunun submit olayını dinle
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Formun varsayılan gönderimini engelle

        // Form alanlarını al
        const email = loginForm.querySelector('input[type="email"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value.trim();

        // Hata mesajını temizle
        if (errorMessage.parentElement) {
            errorMessage.remove();
        }

        // Alanları kontrol et
        if (email === '' || password === '') {
            showError('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            showError('Please enter a valid email address.');
        } else {
            alert('Log In successful!');
            // Formu gönder veya diğer işlemleri yap
            loginForm.reset();
        }
    });

    // Email doğrulama fonksiyonu
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Hata mesajını göster
    function showError(message) {
        errorMessage.textContent = message;
        signUpForm.parentElement.appendChild(errorMessage);
    }
});
