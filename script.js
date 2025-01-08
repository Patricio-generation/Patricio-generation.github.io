 window.addEventListener("DOMContentLoaded", () => {
        const audio = document.getElementById("background-music");

        // Ajusta el volumen a un nivel bajo (por ejemplo, 0.3 = 30%)
        audio.volume = 0.2;
        
        // Intenta reproducir automáticamente
        const playAudio = () => {
            audio.play().catch(() => {
                console.log("Reproducción automática bloqueada. Esperando interacción...");
            });
        };

        // Reintentar al hacer clic en cualquier parte
        document.addEventListener("click", () => {
            audio.play();
        });

        playAudio();
    }
);
