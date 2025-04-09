import { useCandidateCertificates } from "hooks";
import React from "react";
const AvailableCertificates = () => {
  const availableCertificates = useCandidateCertificates("available");

  return (
    <section>
      {/* <div className="Certificate-Details-Title">Available Certificates</div> */}
      {availableCertificates
        // @ts-ignore
        ?.map(({ title, description, price }) => (
          <article key={title}>
            <img
              src="https://raw.githubusercontent.com/wiqrug/wiqrug.github.io/main/images/DALL%C2%B7E%202023-10-26%2018.43.43%20-%20Wide%20cartoon%20artwork%20with%20a%20gentle%20cream-colored%20backdrop.%20Playful%20anime%20clouds%20float%20around%2C%20some%20with%20cute%20expressions%2C%20ensuring%20the%20middle%20remains%20.png"
              alt="img-logo"
            />

            <h4>{title}</h4>
            <h4>{description}</h4>
            <h4>{price}€</h4>
            <button className="Purhcase-Certificate">Buy now</button>
          </article>
        ))}
    </section>
  );
};
export default AvailableCertificates;
