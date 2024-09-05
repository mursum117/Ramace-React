import icon from "../img/icon.ico"

export const metadata = {
  charset: 'utf-8',
  description: 'Centro de bienestar y belleza dedicado a brindar servicios de calidad en acupuntura y extensiones de pestañas.',
  title: 'Ramace Acupuntura',
  viewport: 'width=device-width',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*FONTS*/}
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Rubik&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Rubik:wght@600&display=swap" rel="stylesheet"/>
        <link rel="icon" href={icon.src}/>
        {/*OPEN GRAPH*/}
        <meta name="og:title" content="Ramace Acupuntura"/>
        <meta name="og:description" content="Centro de bienestar y belleza dedicado a brindar servicios de calidad en acupuntura y extensiones de pestañas."/>
        <meta name="og:image" content={icon.src}/>
        <meta name="og:image:alt" content="Logo de Ramace Acupuntura"/>
        <meta name="robots" content="index, follow"/>
        {/*ICONS*/}
        <script src="https://kit.fontawesome.com/1ccb0e54e6.js" crossOrigin="anonymous"></script>
        {/*BOOTSTRAP*/}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>
      </head>
      <body>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>
      </body>
    </html>
  )
}

