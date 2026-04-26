const abas = document.querySelectorAll('.abas');
const secoes = document.querySelectorAll('main section');

abas.forEach(aba => {
    aba.addEventListener('click', () => {
        abas.forEach(a => a.classList.remove('ativo'));
        aba.classList.add('ativo');

        secoes.forEach(sec => sec.style.display = 'none');

        if (aba.id === 'biog') {
            document.querySelector('.biografia').style.display = 'block';
        } else if (aba.id === 'prof') {
            document.querySelector('.profissional').style.display = 'block';
        } else if (aba.id === 'proj') {
            document.querySelector('.projetos').style.display = 'block';
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    abas.forEach(a => a.classList.remove('ativo'));
    secoes.forEach(sec => sec.style.display = 'none');
    if (abas[0]) abas[0].classList.add('ativo');
    if (secoes[0]) secoes[0].style.display = 'block';
});
