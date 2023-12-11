(function() {
    var modal = document.getElementById('myModal');
    var aventuraLink = document.getElementById('aventura');
    var modalText = document.getElementById('modalText');

    aventuraLink.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    function closeModal() {
        modal.style.display = 'none';
    }

    function continueExploring() {
        closeModal();
        // Use um caminho relativo para redirecionar para a página desejada
        window.location.href = './index.htm';
    }

    function resetMessage() {
        modalText.innerHTML = 'Mensagem redefinida! O que você quer fazer agora?';
    }

    function changeMessage() {
        modalText.innerHTML = 'Nova mensagem! Escolha uma opção abaixo.';
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
})();