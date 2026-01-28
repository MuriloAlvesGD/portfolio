import resume from "/resume.json";
import "../style/styleSheets/Certificates.style.css";

function CertificatesView() {
    return (
        <main id="certificates-container">
            {resume
                .sort((a, b) => a.year - b.year)
                .map((certificate, i) => (
                    <div key={i} className="certificate">
                    <div id="year-line"></div>
                        <span className="certificate-year">{certificate.year}</span>
                        <img
                            className="certificate-img"
                            key={i}
                            src={`/portfolio/certificates/${certificate.certificate_pages[0]}.png`}
                        />
                        <div className="certificate-info">
                            <span className="certificate-title">{`Titulo: ${certificate.title}`}</span>
                            <span className="certificate-institution">
                                {`Concedido por: ${certificate.institution}`}
                            </span>
                            <span className="certificate-duration">
                                {certificate.duration_type
                                    ? `${certificate.duration_type.toUpperCase()}: ${certificate.duration}`
                                    : "PREMIAÇÃO"}
                            </span>
                        </div>
                    </div>
                ))}
        </main>
    );
}

export default CertificatesView;