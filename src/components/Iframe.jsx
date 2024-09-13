export default function Iframe({source}) {
    return (
        <iframe
            src={source}
            allowFullScreen = "" 
            loading = "lazy" 
            referrerPolicy = "no-referrer-when-downgrade">
        </iframe>
    );
}