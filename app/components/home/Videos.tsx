

export function Video1() {


    return (
        <video width="800" height="450" controls preload="none">
            <source src="/videos/teacher.mp4" type="video/mp4" />
            <track
                src="/subtitles/captions.vtt"
                kind="subtitles"
                srcLang="es"
                label="Español"
            />
            Tu navegador no soporta la etiqueta de video.
        </video>
    )
}

export function Video2() {


    return (
        <video width="800" height="450" controls preload="none">
            <source src="/videos/rabbit.mp4" type="video/mp4" />
            <track
                src="/subtitles/captions.vtt"
                kind="subtitles"
                srcLang="es"
                label="Español"
            />
            Tu navegador no soporta la etiqueta de video.
        </video>
    )
}

