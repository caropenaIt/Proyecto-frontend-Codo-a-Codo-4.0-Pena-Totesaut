document.addEventListener('DOMContentLoaded', function() {
     const formulario = document.getElementById('registerForm');
     const boton = document.getElementById('btn');
     const inputs = formulario.querySelectorAll('input, textarea, checkbox');
 
     // Función para verificar si todos los campos están completos
     function verificarCampos() {
         let todosCompletos = true;
         inputs.forEach(function(input) {
             if ((input.type === 'checkbox' && !input.checked) || (input.type !== 'checkbox' && input.value.trim() === '')) {
                 todosCompletos = false;
             }
         });
         boton.disabled = !todosCompletos;
     }
 
     // Añadir un evento de escucha a cada campo del formulario
     inputs.forEach(function(input) {
         input.addEventListener('input', verificarCampos);
         if (input.type === 'checkbox') {
             input.addEventListener('change', verificarCampos);
         }
     });
 });