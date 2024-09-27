function updateShowcase() {
    // Obtener el valor de la consola seleccionada
    var selectedConsole = document.getElementById('consoleSelect').value;
    // Desplazarse a la sección de "Image Showcases"
    document.querySelector('#showcase').scrollIntoView({ behavior: 'smooth' });

    // Definir el contenido para cada consola
    var consoles = {
        'atari': {
            img1: 'assets/img/atari.jpg',
            img2: 'assets/img/atari_juego.jpg',
            img3: 'assets/img/atari_accesorio.jpg',
            title: 'Atari 2600: Clásico de Clásicos - $99.99 ',
            desc: 'El <b>Atari 2600</b> es una consola de videojuegos icónica que fue lanzada en 1977 y es considerada una de las primeras en popularizar los videojuegos en el hogar. Revolucionó la industria con su diseño modular y capacidad de utilizar cartuchos intercambiables, permitiendo a los jugadores disfrutar de una variedad de títulos en lugar de estar limitados a un solo juego.',
            compatibleGames: '<b>Pong:</b> Uno de los primeros videojuegos de deportes, simula un partido de tenis de mesa. Es un clásico que ayudó a establecer los videojuegos como una forma de entretenimiento popular. <b>Space Invaders:</b> Un pionero en el género de los juegos de disparos, donde el jugador debe eliminar oleadas de alienígenas que descienden lentamente hacia la tierra. <b>Pac-Man:</b> Un juego de laberintos donde el jugador controla a Pac-Man, un personaje que debe comer puntos mientras evita fantasmas que intentan atraparlo.',
            info: '¿Buscas mejorar tu experiencia con el Atari 2600? ¡No te olvides de los controles clásicos <b>‘Paddle’</b> para juegos como Pong! También puedes conseguir joysticks adicionales para partidas multijugador y llevar la diversión retro a otro nivel.'
        },
        'nes': {
            img1: 'assets/img/nes.jpg',
            img2: 'assets/img/nes_juego.jpg',
            img3: 'assets/img/nes_accesorio.jpg',
            title: 'Nintendo Entertainment System (NES) - $89.99',
            desc: 'La <b>Nintendo Entertainment System (NES)</b> fue lanzada en 1983 y es considerada una de las consolas más influyentes en la historia de los videojuegos. Introdujo a los jugadores a mundos de aventuras vibrantes y gráficos innovadores, marcando el comienzo de la era dorada de los videojuegos en casa. Su diseño robusto y cartuchos intercambiables permitieron a los jugadores disfrutar de un catálogo extenso de títulos que siguen siendo clásicos hasta el día de hoy.',
            compatibleGames: '<b>Super Mario Bros:</b> Un juego icónico que te lleva a un viaje a través del Reino Champiñón para rescatar a la Princesa Peach. <b>The Legend of Zelda:</b> Un juego de aventuras que combina acción y exploración en un mundo abierto lleno de secretos. <b>Metroid:</b> Un juego de acción y exploración que sigue a Samus Aran en su misión para derrotar a los Piratas Espaciales y su monstruo Metroid.',
            info: '¿Quieres maximizar tu experiencia con la NES? No te olvides de conseguir <b>controles adicionales</b> para disfrutar de sesiones multijugador y revive la nostalgia con tus amigos. Además, considera adquirir un <b>adaptador de AV</b> para conectar tu consola a televisores modernos y disfrutar de la calidad de imagen que mereces.'
        },
        'snes': {
            img1: 'assets/img/snes.jpg',
            img2: 'assets/img/snes_juego.jpg',
            img3: 'assets/img/snes_accesorio.jpg',
            title: 'Super Nintendo Entertainment System - $109.99',
            desc: 'La <b>Super Nintendo Entertainment System (SNES)</b>, lanzada en 1990, es famosa por llevar los gráficos y la jugabilidad de los videojuegos a un nuevo nivel. Con su procesador avanzado y capacidad de sonido superior, la SNES brindó experiencias envolventes que cautivaron a jugadores de todas las edades. Su catálogo incluye títulos que se han convertido en clásicos atemporales, consolidando su lugar en la historia de los videojuegos.',
            compatibleGames: '<b>The Legend of Zelda: A Link to the Past:</b> Un juego de aventuras que ofrece exploración profunda y una narrativa épica. <b>Super Mario World:</b> Un juego de plataformas que presenta nuevos personajes y mecánicas de juego, como la famosa Yoshi. <b>Donkey Kong Country:</b> Un innovador juego de plataformas con gráficos pre-renderizados que desafían a los jugadores a recuperar el tesoro robado por los malvados crocodilos.',
            info: 'Para una experiencia de juego óptima con la SNES, considera adquirir <b>controles adicionales</b> para jugar con amigos y familiares. También puedes buscar juegos de colección y accesorios como <b>cables de componentes</b> para disfrutar de una calidad de imagen mejorada en pantallas modernas.'
        },          
        'sega': {
            img1: 'assets/img/sega.jpg',
            img2: 'assets/img/sega_juego.jpg',
            img3: 'assets/img/sega_accesorio.jpg',
            title: 'Sega Genesis - $89.99',
            desc: 'La <b>Sega Genesis</b>, lanzada en 1988, es una de las consolas más queridas de la era de los 16 bits. Con su potente hardware, ofreció gráficos vibrantes y una jugabilidad fluida que atrajo a millones de jugadores. La Genesis se destacó por su biblioteca diversa de juegos, que incluía tanto títulos de acción como aventuras épicas, convirtiéndola en un ícono en la historia de los videojuegos.',
            compatibleGames: '<b>Sonic the Hedgehog:</b> Un juego de plataformas que introdujo a Sonic, el erizo más rápido del mundo, en una misión para detener al malvado Dr. Robotnik. <b>Street Fighter II:</b> Un clásico de lucha que llevó la competencia a otro nivel con personajes icónicos y movimientos especiales. <b>Golden Axe:</b> Un juego de acción y aventura en el que los jugadores luchan contra hordas de enemigos en un mundo de fantasía.',
            info: 'Para maximizar tu diversión con la Sega Genesis, considera la compra de <b>controles de seis botones</b> para una experiencia de juego más cómoda en títulos de lucha. También puedes buscar <b>cápsulas de expansión</b> para jugar a juegos clásicos que quizás te hayas perdido.'
        },
        'playstation': {
            img1: 'assets/img/play.jpg',
            img2: 'assets/img/play_juego.jpg',
            img3: 'assets/img/play_accesorio.jpg',
            title: 'PlayStation: La Revolución de los Videojuegos - $149.99',
            desc: 'La <b>PlayStation</b>, lanzada en 1994, marcó un antes y un después en la industria de los videojuegos al introducir gráficos en 3D y un sonido envolvente. Con su innovador diseño y un catálogo de juegos inolvidables, se convirtió en un referente en el mundo del entretenimiento. Esta consola no solo popularizó los videojuegos en CD, sino que también estableció el camino para futuras consolas con su enfoque en la experiencia del jugador.',
            compatibleGames: '<b>Final Fantasy VII:</b> Un hito en los RPG, que llevó la narrativa y la jugabilidad a nuevos niveles con personajes memorables y una historia épica. <b>Crash Bandicoot:</b> Un clásico de plataformas que se convirtió en la mascota de PlayStation, ofreciendo diversión y desafíos en un mundo colorido. <b>Metal Gear Solid:</b> Un juego de sigilo que redefinió el género con su historia compleja y jugabilidad innovadora.',
            info: '¿Quieres aprovechar al máximo tu experiencia de juego en la PlayStation? ¡Considera la compra de <b>tarjetas de memoria</b> para guardar tus avances y disfrutar de tus juegos sin preocupaciones! También puedes encontrar <b>joysticks adicionales</b> para jugar con amigos y disfrutar de sesiones de juego más largas.'
        },
        'n64': {
            img1: 'assets/img/n64.jpg',
            img2: 'assets/img/n64_juego.jpg',
            img3: 'assets/img/n64_accesorio.jpg',
            title: 'Nintendo 64: La Era del 3D - $129.99',
            desc: 'La <b>Nintendo 64</b>, lanzada en 1996, fue una de las primeras consolas en ofrecer gráficos en 3D verdaderos, marcando un hito en la historia de los videojuegos. Su diseño icónico y el uso de cartuchos le dieron un lugar especial en el corazón de los jugadores. La N64 es famosa por su capacidad de ofrecer experiencias multijugador local inolvidables, convirtiéndola en la consola perfecta para reuniones con amigos y familia.',
            compatibleGames: '<b>Super Mario 64:</b> Un juego que redefinió el género de plataformas, llevando a Mario a un mundo 3D lleno de aventuras y exploración. <b>The Legend of Zelda: Ocarina of Time:</b> Un clásico aclamado por la crítica que combinó una narrativa profunda con mecánicas innovadoras. <b>GoldenEye 007:</b> Un pionero en los juegos de disparos en primera persona, conocido por su modo multijugador que aún se recuerda con cariño.',
            info: 'Para una experiencia de juego completa en tu Nintendo 64, ¡no olvides conseguir <b>controles adicionales</b> para partidas multijugador! También puedes optar por <b>memorias adicionales</b> para almacenar tus juegos y disfrutar de tus títulos favoritos sin limitaciones.'
        },

    };

    // Verificar si se seleccionó una consola válida
    if (selectedConsole in consoles) {
        // Cambiar la imagen de fondo del primer showcase
        document.getElementById('showcase-img1').style.backgroundImage = `url(${consoles[selectedConsole].img1})`;
        // Cambiar el texto del título y descripción de la primera sección
        document.getElementById('showcase-title1').innerText = consoles[selectedConsole].title;
        document.getElementById('showcase-desc1').innerHTML = consoles[selectedConsole].desc;

        // Cambiar la imagen de fondo del segundo showcase
        document.getElementById('showcase-img2').style.backgroundImage = `url(${consoles[selectedConsole].img2})`;
        // Cambiar el título y contenido de los juegos compatibles (usando innerHTML para admitir etiquetas HTML)
        document.getElementById('showcase-title2').innerText = 'Videojuegos Compatibles';
        document.getElementById('showcase-desc2').innerHTML = consoles[selectedConsole].compatibleGames;

        // Cambiar la imagen de fondo del primer showcase
        document.getElementById('showcase-img3').style.backgroundImage = `url(${consoles[selectedConsole].img3})`; 
        // Cambiar la información del costo (puedes usar innerText aquí ya que no tiene etiquetas HTML)
        document.getElementById('showcase-title3').innerText = ' Accesorios Disponibles:';
        document.getElementById('showcase-desc3').innerHTML = consoles[selectedConsole].info;
    } else {
        alert('Por favor, selecciona una consola válida.');
    }

    document.getElementById("contactFormFooter").addEventListener("submit", function(event) {
        event.preventDefault();
        const email = document.getElementById("emailAddressBelow").value;
    
        fetch("send_email.php", { // Cambia la ruta a tu script PHP
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "emailAddressBelow=" + encodeURIComponent(email)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById("submitSuccessMessage").classList.remove("d-none");
                document.getElementById("submitErrorMessage").classList.add("d-none");
                document.getElementById("contactFormFooter").reset(); // Limpia el formulario
            } else {
                document.getElementById("submitErrorMessage").classList.remove("d-none");
                document.getElementById("submitSuccessMessage").classList.add("d-none");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("submitErrorMessage").classList.remove("d-none");
            document.getElementById("submitSuccessMessage").classList.add("d-none");
        });
    });

    // Inicializar EmailJS con tu Public Key
    // Inicializar EmailJS con tu Public Key
    (function(){
        emailjs.init("UeslxAHXwiY0oJLrU"); // Reemplaza con tu clave pública
    })();

    const contactForm = document.getElementById("contactFormFooter");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Enviar los datos del formulario a EmailJS
        emailjs.sendForm("service_tuu6e1d", "template_d2g9w48", contactForm)
            .then(function(response) {
                console.log("Correo enviado exitosamente", response);
                document.getElementById("submitSuccessMessage").classList.remove('d-none'); // Mostrar mensaje de éxito
                contactForm.reset(); // Limpiar el formulario
            }, function(error) {
                console.error("Error al enviar el correo", error);
                document.getElementById("submitErrorMessage").classList.remove('d-none'); // Mostrar mensaje de error
            });
    });




}
