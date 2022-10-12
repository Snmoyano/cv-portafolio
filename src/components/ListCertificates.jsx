import React from "react";
import certificates from "../json/certificates.json";
import Certificates from "./Certificates";

const ListCertificates = () => {
  return (
    <section className="container__certificates">
      {certificates?.map((cert) => (
        <Certificates
          key={cert.name}
          name={cert.name}
          domain={cert.domain}
          image={cert.image}
        />
      ))}
    </section>
  );
};

export default ListCertificates;
